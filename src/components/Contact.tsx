import { Github, Linkedin, Mail, Calendar, ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fr } from 'date-fns/locale/fr';
import { PROFILE_IMAGE } from '../utils/images';
import { CONTACT, SOCIAL_LINKS } from '../utils/constants';

const API_BASE = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4000/api';

export default function Contact() {
  registerLocale('fr', fr);

  const [formState, setFormState] = useState<{ 
    firstName: string; 
    lastName: string; 
    email: string; 
    date: Date | null 
  }>({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    date: null 
  });
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const HOURS = Array.from({ length: 9 }).map((_, i) => 10 + i);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) {
      setFormState({ ...formState, date });
      return;
    }
    const hour = selectedHour ?? 10;
    const newDate = new Date(date);
    newDate.setHours(hour, 0, 0, 0);
    setFormState({ ...formState, date: newDate });
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const hour = parseInt(e.target.value, 10);
    setSelectedHour(hour);
    if (formState.date) {
      const newDate = new Date(formState.date);
      newDate.setHours(hour, 0, 0, 0);
      setFormState({ ...formState, date: newDate });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.firstName.trim() || !formState.lastName.trim() || !formState.email.trim() || !formState.date || selectedHour === null) {
      setSubmitError('Renseignez vos coordonnées, choisissez une date et sélectionnez une heure.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(`${API_BASE}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formState.firstName} ${formState.lastName}`.trim(),
          firstName: formState.firstName.trim(),
          lastName: formState.lastName.trim(),
          email: formState.email,
          date: formState.date?.toISOString(),
        }),
      });

      const result = await res.json().catch(() => null) as {
        success?: boolean;
        error?: string;
        emailSent?: boolean;
      } | null;

      if (!res.ok || result?.success !== true || result.emailSent !== true) {
        throw new Error(result?.error || 'La demande n’a pas été envoyée. Réessayez ou contactez-nous par e-mail.');
      }

      setSent(true);
      window.setTimeout(() => setSent(false), 4000);
      setFormState({ firstName: '', lastName: '', email: '', date: null });
      setSelectedHour(null);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erreur lors de l’envoi de la demande.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" aria-hidden="true" />
      
      <div className="max-w-5xl mx-auto">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Premier rendez-vous gratuit</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-4">
            Prenons <span className="text-gradient">contact</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discutons de votre projet lors d'un entretien personnalisé et sans engagement.
          </p>
        </motion.header>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profil Card */}
          <div className="card-bento p-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Abderrahmane El Farouah" 
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-accent/30 shadow-glow-animated"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-text-main mb-2">
              Abderrahmane El Farouah
            </h2>
            <p className="text-text-secondary text-center mb-6">
              Créateur de solutions digitaux pour commerçants et artisans
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${CONTACT.PHONE_TEL}`}
                aria-label={`Appeler le ${CONTACT.PHONE_DISPLAY}, disponible 7j sur 7`}
                className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 touch-area focus-visible hover:bg-accent/15 transition-colors no-underline min-w-0"
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="min-w-0">
                  <span className="block text-text-main font-medium whitespace-nowrap group-hover:text-accent">
                    {CONTACT.PHONE_DISPLAY}
                  </span>
                  <span className="text-sm text-text-secondary whitespace-nowrap">Disponible 7j/7</span>
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                aria-label={`Envoyer un email à ${CONTACT.EMAIL}, réponse sous 24 heures`}
                className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 touch-area focus-visible hover:bg-accent/15 transition-colors no-underline min-w-0"
              >
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block text-text-main font-medium text-sm sm:text-base break-words hover:text-accent transition-colors leading-snug">
                    {CONTACT.EMAIL}
                  </span>
                  <span className="text-sm text-text-secondary mt-0.5 block">Réponse sous 24h</span>
                </span>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10">
                <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                <a
                  href={CONTACT.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-green-500 transition-colors font-medium whitespace-nowrap touch-area focus-visible"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <a 
                href={SOCIAL_LINKS.GITHUB} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="touch-area focus-ring w-12 h-12 rounded-2xl glass flex items-center justify-center text-text-main hover:text-accent hover:border-accent/50 transition-all"
                aria-label="Visiter mon profil GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="touch-area focus-ring w-12 h-12 rounded-2xl glass flex items-center justify-center text-text-main hover:text-accent hover:border-accent/50 transition-all"
                aria-label="Visiter mon profil LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${CONTACT.EMAIL}`}
                className="touch-area focus-ring w-12 h-12 rounded-2xl btn-primary flex items-center justify-center"
                aria-label="M'envoyer un email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Formulaire Card */}
          <div className="card-bento p-8">
            <h2 className="text-2xl font-bold text-center text-text-main mb-2">
              Prendre rendez-vous
            </h2>
            <p className="text-text-secondary text-center mb-6">
              Choisissez un créneau qui vous convient
            </p>
            
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Demande envoyée</h3>
                <p className="text-text-secondary">
                  Votre demande a bien été transmise par e-mail. Le créneau sera confirmé après échange.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <p className="text-red-600 text-sm" role="alert">
                    {submitError}{' '}
                    <a className="underline" href={`mailto:${CONTACT.EMAIL}`}>
                      Contacter par e-mail
                    </a>
                  </p>
                )}
                <div>
                  <label htmlFor="firstName" className="block text-text-secondary text-sm font-medium mb-2">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border-color focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-text-secondary text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border-color focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border-color focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-text-secondary text-sm font-medium mb-2">Date</label>
                  <DatePicker
                    id="date"
                    selected={formState.date}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={60}
                    minDate={new Date()}
                    locale={fr}
                    dateFormat="Pp"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border-color focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholderText="Choisissez une date"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="hour" className="block text-text-secondary text-sm font-medium mb-2">Heure</label>
                  <select
                    id="hour"
                    name="hour"
                    value={selectedHour || ''}
                    onChange={handleHourChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border-color focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Sélectionnez une heure</option>
                    {HOURS.map((hour) => (
                      <option key={hour} value={hour}>{hour}:00</option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full btn btn-primary py-4 text-lg font-bold group disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer la demande'}
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
