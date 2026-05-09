import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Zap } from 'lucide-react';
import Container from '../components/shared/Container';

function DeveloppeurLaravelFreelance() {
  return (
    <>
      <Helmet>
        <title>Développeur Laravel Freelance | Abderrahmane El Farouah</title>
        <meta name="description" content="Développeur Laravel freelance à Mantes-la-Jolie et Île-de-France. Services de développement backend Laravel, APIs et sites sur mesure." />
        <meta name="keywords" content="développeur Laravel freelance, Laravel freelance, développeur backend Laravel, expert Laravel Mantes-la-Jolie, développement API Laravel, freelance Laravel Île-de-France" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Développeur Laravel Freelance | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développeur Laravel freelance à Mantes-la-Jolie. Développement backend Laravel, APIs et sites sur mesure." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/developpeur-laravel-freelance" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développeur Laravel Freelance | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développeur Laravel freelance à Mantes-la-Jolie. Services backend Laravel." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Container className="py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-text-main mb-4"
            >
              Développeur <span className="text-accent">Laravel Freelance</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Expert en développement backend Laravel, APIs REST, et applications web sur mesure pour entreprises et startups à Mantes-la-Jolie et dans toute l'Île-de-France.
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Applications Web Sur Mesure</h3>
              <p className="text-text-secondary mb-4">Développement d'applications web complètes avec Laravel, Vue.js ou React, base de données MySQL/PostgreSQL.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Architecture MVC et design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>APIs REST et GraphQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Authentification et sécurité</span>
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
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">APIs & Microservices</h3>
              <p className="text-text-secondary mb-4">Création d'APIs REST, GraphQL et microservices avec Laravel Lumen, Node.js et Docker.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Documentation Swagger/OpenAPI</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Tests automatisés et CI/CD</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Monitoring et logging</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Maintenance & Support</h3>
              <p className="text-text-secondary mb-4">Support technique, évolutivité et maintenance d'applications Laravel existantes.</p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Mises à jour de sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Optimisation performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Support prioritaire 24/7</span>
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
            <h2 className="text-2xl font-bold text-text-main mb-4">Prêt à développer votre projet Laravel ?</h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins backend et obtenez un devis gratuit pour votre application Laravel sur mesure.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 group"
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

export const Route = createFileRoute('/developpeur-laravel-freelance')({
  component: DeveloppeurLaravelFreelance,
})
