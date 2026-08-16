import { Code, Database, Globe, MapPin, Phone, Mail, ArrowRight, Sparkles, CheckCircle, Calendar } from 'lucide-react';
import { PROFILE_IMAGE } from '../utils/images';
import { CONTACT } from '../utils/constants';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type LocalContactItem = {
  icon: ReactNode;
  label: string;
  sublabel: string;
  href?: string;
  ariaLabel?: string;
  /** Numéro court : une seule ligne */
  keepIntact?: boolean;
  /** Plus de largeur en grille (ex. email) */
  gridClass?: string;
};

const localContactItems: LocalContactItem[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Mantes-la-Jolie',
    sublabel: 'Yvelines (78)',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: CONTACT.PHONE_DISPLAY,
    sublabel: 'Disponible 7j/7',
    href: `tel:${CONTACT.PHONE_TEL}`,
    ariaLabel: `Appeler le ${CONTACT.PHONE_DISPLAY}, disponible 7j sur 7`,
    keepIntact: true,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: CONTACT.EMAIL,
    sublabel: 'Réponse sous 24h',
    href: `mailto:${CONTACT.EMAIL}`,
    ariaLabel: `Envoyer un email à ${CONTACT.EMAIL}, réponse sous 24 heures`,
    gridClass: 'sm:col-span-2 lg:col-span-1',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen selection-accent">
      {/* Hero Section */}
      <section id="hero" className="hero-depth section-premium min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/25 rounded-full blur-[100px] -z-10 motion-reduce:hidden" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] -z-10 motion-reduce:hidden" aria-hidden="true" />
        
        <motion.div 
          className="text-center max-w-4xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <div className="relative inline-block">
              <img 
                src={PROFILE_IMAGE} 
                alt="Abderrahmane El Farouah - Développeur Web Freelance Angular Laravel à Mantes-la-Jolie (78)" 
                className="w-36 h-36 rounded-full object-cover shadow-glow-animated mx-auto mb-6 ring-4 ring-accent/20"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Transformation digitale • Résultats mesurables</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="ai-speakable-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-text-main">Développeur Web Angular </span>
            <span className="text-gradient">Freelance Mantes-la-Jolie</span>
          </motion.h1>
          
          <motion.h2 
            className="ai-speakable-headline text-xl md:text-2xl mb-8 text-text-secondary font-medium"
            variants={fadeInUp}
          >
            Spécialiste Angular, Laravel & React • Yvelines (78) • Télétravail France entière
          </motion.h2>
          
          <motion.p 
            className="ai-speakable-summary text-lg mb-12 max-w-2xl mx-auto text-text-secondary leading-relaxed"
            variants={fadeInUp}
          >
            Je crée des <strong>applications web performantes</strong> avec Angular et Laravel pour les 
            <strong className="text-accent">entreprises des Yvelines et d'Île-de-France</strong>. 
            Sites vitrines, applications métier, e-commerce : des solutions digitales sur mesure, 100% télétravail.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.a
              href="/contact"
              className="btn-premium relative inline-flex items-center gap-3 px-12 py-6 text-xl font-bold rounded-2xl shadow-btn-glow transition-all duration-300 group overflow-hidden focus-ring"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Calendar className="w-7 h-7 relative z-10" />
              <span className="relative z-10">Prendre RDV gratuit</span>
              <ArrowRight className="w-7 h-7 ml-1 relative z-10 group-hover:translate-x-3 transition-transform duration-300" />
            </motion.a>
            <a 
              href="/services"
              className="btn btn-secondary px-8 py-4 text-base font-medium group"
            >
              Voir mes services
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* About Bento Section */}
      <section id="about" className="section-premium py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Une <span className="text-gradient">Approche</span> Orientée Résultats
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Processus éprouvé pour livrer des solutions de qualité
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Écoute", desc: "On discute de votre activité, de vos contraintes et de vos objectifs concrets", icon: <Code className="w-6 h-6" /> },
              { num: "02", title: "Solution", desc: "Je vous propose un outil adapté à votre métier et à votre budget", icon: <Database className="w-6 h-6" /> },
              { num: "03", title: "Accompagnement", desc: "Mise en place, formation et suivi pour que vous soyez autonome", icon: <Globe className="w-6 h-6" /> }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-bento text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gradient">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Location Bento Section */}
      <section id="local" className="section-premium py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Localisation</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Intervention en <span className="text-gradient">Île-de-France</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Basé à Mantes-la-Jolie, disponible pour vos projets dans toute la région
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localContactItems.map((item, index) => {
              const cardClassName =
                'card-bento flex items-center gap-4 group min-w-0 transition-colors duration-200 p-5 sm:p-6';
              const content = (
                <>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-text-main font-semibold group-hover:text-accent transition-colors leading-snug ${
                        item.keepIntact
                          ? 'whitespace-nowrap'
                          : 'text-sm sm:text-base break-words'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm text-text-secondary mt-0.5 block">
                      {item.sublabel}
                    </span>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`${cardClassName} ${item.gridClass ?? ''} touch-area focus-visible hover:border-accent/40 no-underline`}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`${cardClassName} ${item.gridClass ?? ''}`}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Visibility */}
      <section id="cta" className="py-28 px-4 relative overflow-hidden">
        {/* Dark gradient background for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-primary to-accent/90 bg-[length:200%_200%] animate-gradient-shift -z-20" />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 -z-10" />
        
        {/* Subtle glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] -z-10" />
        
        {/* Card container with dark background */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative glass-strong rounded-3xl p-10 md:p-14 text-center border border-border-color/40 dark:border-white/20 shadow-card-elevated">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent dark:bg-accent/20 dark:text-white text-sm font-medium mb-6 border border-accent/30">
              <Sparkles className="w-4 h-4 text-accent dark:text-accent" />
              <span>Premier rendez-vous gratuit</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-text-main dark:text-white tracking-tight leading-tight">
              Développeur Web Freelance Angular & Laravel<br />à Mantes-la-Jolie
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-text-secondary dark:text-gray-200 font-medium max-w-xl mx-auto leading-relaxed">
              Création d'applications web performantes, sites sur mesure et SEO pour entreprises et startups à Mantes-la-Jolie et dans toute l'Île-de-France.
            </p>
            
            {/* Prominent CTA Button with pulse */}
            <div className="relative inline-block">
              {/* Pulse ring animation */}
              <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping opacity-20" />
              
              <motion.a 
                href="/contact"
                className="relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-white text-accent font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
                Me contacter maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-text-secondary dark:text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" />
                Réponse sous 24h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" />
                Disponible Île-de-France
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
