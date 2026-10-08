import { sendEmailWithRetry, getSecureFromEmail, getNotifyTo } from './utils/email.js';

// Serverless memory is temporary; it is not a durable appointment store.
let appointments = [];

async function sendNotificationEmail(appointment, notifyTo) {
  const when = new Date(appointment.date).toLocaleString('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const fromEmail = getSecureFromEmail('RDV Bot');
  console.log('[Appointment] Envoi notification:', {
    from: fromEmail,
    to: notifyTo
  });

  const data = await sendEmailWithRetry({
    from: fromEmail,
    to: notifyTo,
    subject: `Nouveau rendez-vous: ${appointment.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #F26B2E;">Nouveau rendez-vous</h2>
        <p><strong>Nom:</strong> ${appointment.name}</p>
        <p><strong>Email:</strong> ${appointment.email}</p>
        <p><strong>Date:</strong> ${when}</p>
        <hr style="border: 1px solid #2B3E50; margin: 20px 0;">
        <p style="font-size: 0.9em; color: #666;">
          Ce message a été envoyé automatiquement depuis votre site portfolio.
        </p>
      </div>
    `
  });

  return data;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const expectedCode = process.env.DIGICODE;
    if (!expectedCode) {
      console.error('[Appointment] DIGICODE is not configured');
      return res.status(503).json({ success: false, error: 'Le panneau admin est indisponible.' });
    }

    if (req.headers['x-digicode'] !== expectedCode) {
      return res.status(401).json({ success: false, error: 'Code administrateur incorrect.' });
    }

    return res.status(200).json(appointments);
  }

  if (req.method === 'POST') {
    const { name, email, date } = req.body || {};
    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedEmail = typeof email === 'string' ? email.trim() : '';
    const parsedDate = typeof date === 'string' ? new Date(date) : null;

    if (
      !normalizedName ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) ||
      !parsedDate ||
      Number.isNaN(parsedDate.getTime())
    ) {
      return res.status(400).json({ success: false, error: 'Vérifiez le nom, l’adresse e-mail et la date demandée.' });
    }

    const notifyTo = getNotifyTo();
    if (!notifyTo) {
      console.error('[Appointment] NOTIFY_TO is not configured');
      return res.status(503).json({
        success: false,
        error: 'Le service de rendez-vous est momentanément indisponible. Veuillez nous contacter par e-mail.',
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[Appointment] RESEND_API_KEY is not configured');
      return res.status(503).json({
        success: false,
        error: 'Le service de rendez-vous est momentanément indisponible. Veuillez nous contacter par e-mail.',
      });
    }

    const appointment = {
      id: appointments.length + 1,
      name: normalizedName,
      email: normalizedEmail,
      date: parsedDate.toISOString(),
    };

    try {
      const info = await sendNotificationEmail(appointment, notifyTo);
      appointments.push(appointment);
      
      console.log('[Appointment] Rendez-vous créé et notification envoyée:', {
        appointmentId: appointment.id,
        emailId: info?.id,
        to: notifyTo
      });

      return res.status(201).json({
        success: true,
        appointment,
        notification: info?.id || null,
        emailSent: true,
      });
    } catch (e) {
      console.error('[Appointment] Erreur lors de l\'envoi de l\'email:', {
        error: e?.message,
        stack: e?.stack,
        appointmentId: appointment.id
      });

      return res.status(502).json({
        success: false,
        error: 'La demande n’a pas pu être envoyée. Réessayez ou contactez-nous par e-mail.',
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Méthode ${req.method} non autorisée`);
}