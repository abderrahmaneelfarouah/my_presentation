import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PROFILE_IMAGE } from '../utils/images';
import { SOCIAL_LINKS } from '../utils/constants';
import Container from './shared/Container';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <header className="section-premium h-full py-4 sm:py-8 md:py-16 px-4 w-full max-w-full mx-auto">
      <Container className="flex flex-col justify-between text-center space-y-5 sm:space-y-7 md:space-y-10">
        {/* Profile Image with subtle glow */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative">
            <img
              src={PROFILE_IMAGE}
              alt="Développeur Web Angular Laravel - Abderrahmane El Farouah"
              width="160"
              height="160"
              className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-border-color shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent-secondary/20 -z-10 blur-xl" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
            <span className="text-text-main">Applications Web qui </span>
            <span className="text-gradient">Délivrent</span>
          </h1>

          <h2 className="text-lg sm:text-xl text-text-secondary font-medium">
            Gain de temps • Réduction des coûts • Productivité accrue
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          J'accompagne les entreprises de l'<span className="text-accent font-semibold">Île-de-France</span> dans leur
          transformation digitale avec des solutions sur mesure qui génèrent des <span className="text-accent font-semibold">résultats mesurables</span> :
          processus optimisés, données sécurisées, évolutivité garantie.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-area focus-ring w-14 h-14 flex items-center justify-center rounded-lg border border-border-color bg-surface text-text-main hover:text-accent hover:border-accent transition-colors duration-200"
            title="GitHub"
            aria-label="Visiter mon profil GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-area focus-ring w-14 h-14 flex items-center justify-center rounded-lg border border-border-color bg-surface text-text-main hover:text-accent hover:border-accent transition-colors duration-200"
            title="LinkedIn"
            aria-label="Visiter mon profil LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
            className="touch-area focus-ring w-14 h-14 flex items-center justify-center rounded-lg btn-primary transition-colors duration-200"
            title="Email"
            aria-label="M'envoyer un email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-sm">Découvrir</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </Container>
    </header>
  );
}