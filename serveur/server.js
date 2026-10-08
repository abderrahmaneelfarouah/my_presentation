// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Middleware CORS pour ton frontend Vite
app.use(cors({
  origin: (origin, callback) => {
    const allowed = new Set([
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:5173',
      'http://127.0.0.1:5173',
    ]);

    if (!origin || allowed.has(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(bodyParser.json());

// Digicode via variable d'environnement
// Définir DIGICODE dans le fichier .env à la racine de `serveur` (ex: DIGICODE=1234)
app.post('/api/check-digicode', (req, res) => {
  const { code } = req.body || {};
  const expected = process.env.DIGICODE || '';

  if (typeof code !== 'string' || code.length === 0) {
    return res.status(400).json({ success: false, error: 'Code manquant' });
  }

  if (code === expected) {
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false });
});

// This in-memory list is temporary and can reset when the server restarts.
let appointments = [];

app.get('/api/appointments', (req, res) => {
  const expectedCode = process.env.DIGICODE;
  if (!expectedCode) {
    console.error('[Appointment] DIGICODE is not configured');
    return res.status(503).json({ success: false, error: 'Le panneau admin est indisponible.' });
  }

  if (req.headers['x-digicode'] !== expectedCode) {
    return res.status(401).json({ success: false, error: 'Code administrateur incorrect.' });
  }

  return res.json(appointments);
});

app.post('/api/appointments', async (req, res) => {
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

  const appointment = {
    id: appointments.length + 1,
    name: normalizedName,
    email: normalizedEmail,
    date: parsedDate.toISOString(),
  };

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !NOTIFY_TO) {
    console.error('[Appointment] SMTP notification is not configured');
    return res.status(503).json({
      success: false,
      error: 'Le service de rendez-vous est momentanément indisponible. Veuillez nous contacter par e-mail.',
    });
  }

  let emailId = null;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const when = new Date(appointment.date).toLocaleString('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await transporter.verify();
    const info = await transporter.sendMail({
      from: `${appointment.name} <${SMTP_USER}>`,
      to: NOTIFY_TO,
      subject: 'Vous avez une demande de rendez-vous',
      text: `Nom: ${appointment.name}\nEmail: ${appointment.email}\nDate: ${when}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #F26B2E;">Vous avez une demande de rendez-vous</h2>
            <p><strong>Nom:</strong> ${appointment.name}</p>
            <p><strong>Email:</strong> ${appointment.email}</p>
            <p><strong>Date:</strong> ${when}</p>
            <hr style="border: 1px solid #2B3E50; margin: 20px 0;">
            <p style="font-size: 0.9em; color: #666;">
              Ce message a été envoyé automatiquement depuis votre site portfolio.
            </p>
          </div>
        `,
    });

    emailId = info?.messageId || null;
    appointments.push(appointment);
    console.log('[Appointment] Notification email envoyée:', emailId);
  } catch (err) {
    console.error('[Appointment] Erreur SMTP:', err?.message);
    return res.status(502).json({
      success: false,
      error: 'La demande n’a pas pu être envoyée. Réessayez ou contactez-nous par e-mail.',
    });
  }

  return res.status(201).json({
    success: true,
    appointment,
    notification: emailId,
    emailSent: true,
  });
});

app.listen(PORT, () => console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`));
