import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import Container from '../components/shared/Container';

function DeveloppeurAngularFreelance() {
  return (
    <>
      <Helmet>
        <title>Développeur Angular Freelance | Abderrahmane El Farouah</title>
        <meta name="description" content="Développeur Angular freelance à Mantes-la-Jolie et Île-de-France. Services de développement d'applications web Angular sur mesure pour entreprises et startups." />
        <meta name="keywords" content="développeur Angular freelance, Angular freelance, développeur web Angular, expert Angular Mantes-la-Jolie, développement application Angular, freelance Angular Île-de-France" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Développeur Angular Freelance | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développeur Angular freelance à Mantes-la-Jolie. Développement d'applications web Angular sur mesure pour entreprises." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/developpeur-angular-freelance" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développeur Angular Freelance | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développeur Angular freelance à Mantes-la-Jolie. Services Angular sur mesure." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Container className="py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-text-main mb-4"
            >
              Développeur <span className="text-accent">Angular Freelance</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Expert en développement d'applications web Angular pour entreprises et startups à Mantes-la-Jolie et dans toute l'Île-de-France.
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
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Applications Angular sur Mesure</h3>
              <p className="text-text-secondary mb-4">Développement d'applications métier complètes avec Angular, TypeScript et intégration backend.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Architecture MVC et composants réutilisables</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Tests unitaires et intégration continue</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Performance et SEO optimisés</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Migration & Modernisation</h3>
              <p className="text-text-secondary mb-4">Mise à niveau et modernisation de vos applications Angular existantes.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Migration Angular 2+ vers dernière version</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Refactoring et optimisation performance</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Maintenance & Support</h3>
              <p className="text-text-secondary mb-4">Support technique et évolutivité de vos applications Angular.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Contrat de maintenance annuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Interventions rapides et support prioritaire</span>
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
            <h2 className="text-2xl font-bold text-text-main mb-4">Prêt à développer votre projet Angular ?</h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins et obtenez un devis gratuit pour votre application Angular sur mesure.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Obtenir un devis gratuit</span>
            </motion.a>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export const Route = createFileRoute('/developpeur-angular-freelance')({
  component: DeveloppeurAngularFreelance,
})
