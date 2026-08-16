import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Zap } from 'lucide-react';
import Container from '../components/shared/Container';

function ApplicationsWebSurMesure() {
  return (
    <>
      <Helmet>
        <title>Applications Web Sur Mesure | Abderrahmane El Farouah</title>
        <meta name="description" content="Développement d'applications web sur mesure pour entreprises et startups. Solutions logicielles personnalisées avec Angular, Laravel et React." />
        <meta name="keywords" content="applications web sur mesure, développement logiciel personnalisé, Angular sur mesure, Laravel sur mesure, freelance développement applications, entreprise applications métier" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Applications Web Sur Mesure | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développement d'applications web sur mesure pour entreprises et startups. Solutions logicielles personnalisées." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/applications-web-sur-mesure" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Applications Web Sur Mesure | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développement d'applications web sur mesure pour entreprises." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <div className="min-h-screen page-shell">
        <Container className="py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-text-main mb-4"
            >
              Applications <span className="text-accent">Web Sur Mesure</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Développement d'applications web et logiciels personnalisés pour automatiser vos processus métier et optimiser votre productivité.
            </motion.p>
          </header>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-bento p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Gestion d'Entreprise</h3>
              <p className="text-text-secondary mb-4">Applications complètes pour la gestion : CRM, ERP, facturation, planning, gestion de stocks.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Interface intuitive et responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Automatisation des tâches répétitives</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Tableaux de bord et statistiques</span>
                </li>
              </ul>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-bento p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Applications Mobiles</h3>
              <p className="text-text-secondary mb-4">Applications mobiles natives et PWA pour iPhone et Android avec React Native ou Flutter.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Performance native</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Notifications push</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Mode hors ligne</span>
                </li>
              </ul>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-bento p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Intégrations & API</h3>
              <p className="text-text-secondary mb-4">Connexion avec vos outils existants via API REST, GraphQL et webhooks.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>APIs REST et GraphQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Webhooks et automatisations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Authentification SSO</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-text-main mb-4">Prêt à développer votre application sur mesure ?</h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins spécifiques et obtenez un devis personnalisé pour votre application métier.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Demander un devis gratuit</span>
            </motion.a>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export const Route = createFileRoute('/applications-web-sur-mesure')({
  component: ApplicationsWebSurMesure,
})
