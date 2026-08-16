import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* Hero Section - Editorial composition on cream */}
      <section id="hero" className="section-premium min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          className="text-center max-w-5xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Développement web freelance
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            <span className="text-text-main">Sites web rapides, </span>
            <span className="text-gradient">modernes et efficaces</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-text-secondary leading-relaxed font-light"
            variants={fadeInUp}
          >
            J'accompagne les entreprises et indépendants dans la création, l'amélioration et l'évolution de leurs applications et sites web.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={fadeInUp}
          >
            <motion.a
              href="/contact"
              className="btn-premium inline-flex items-center gap-3 px-10 py-4 text-base font-medium rounded-lg focus-ring"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
            <a 
              href="/services"
              className="btn btn-secondary px-10 py-4 text-base font-medium inline-flex items-center gap-2"
            >
              Découvrir mes services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 2 - Preuve immédiate */}
      <section id="proof" className="section-premium py-24 px-4" aria-labelledby="proof-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="proof-heading" className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Pourquoi <span className="text-gradient">me choisir</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Une expertise technique au service de votre réussite professionnelle
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />, title: "Expertise technique", desc: "Maîtrise d'Angular, Laravel, TypeScript et des technologies web modernes pour créer des solutions performantes et évolutives adaptées aux besoins des entreprises contemporaines." },
              { icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />, title: "Approche personnalisée", desc: "Chaque projet est unique : j'analyse vos besoins spécifiques pour concevoir des solutions sur mesure qui s'intègrent parfaitement à votre activité et vos processus métier." },
              { icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />, title: "Travail à distance", desc: "Collaboration fluide et efficace grâce à des outils modernes de communication et de gestion de projet, permettant un accompagnement optimal où que vous soyez en France." },
              { icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />, title: "Accompagnement complet", desc: "Formation approfondie et suivi personnalisé pour vous rendre autonome sur votre solution digitale, avec une disponibilité continue pour répondre à vos questions." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 3 - Services */}
      <section id="services" className="section-premium py-24 px-4" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Mes <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Des solutions digitales complètes pour transformer votre présence en ligne et optimiser vos processus métier
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Création de sites web", problem: "Votre entreprise n'a pas de présence en ligne ou votre site actuel ne reflète pas votre professionnalisme", solution: "Conception et développement de sites vitrines modernes, responsives et optimisés pour les moteurs de recherche, avec une attention particulière à l'expérience utilisateur et à la conversion", benefit: "Visibilité accrue auprès de votre clientèle cible, crédibilité renforcée et génération de leads qualifiés grâce à un site professionnel et performant" },
              { title: "Applications web", problem: "Vos processus métier sont chronophages, manuels et sujets aux erreurs humaines", solution: "Développement d'applications web sur mesure qui automatisent vos tâches répétitives, centralisent vos données et fluidifient vos workflows internes", benefit: "Gain de temps significatif pour votre équipe, réduction des erreurs opérationnelles et amélioration globale de la productivité de votre entreprise" },
              { title: "Refonte & optimisation", problem: "Votre site web existant est techniquement obsolète, lent ou ne répond plus aux standards actuels du web", solution: "Analyse approfondie de l'existant, modernisation de l'architecture technique, optimisation des performances et mise à jour du design selon les meilleures pratiques actuelles", benefit: "Site plus rapide et moderne, meilleure expérience utilisateur, conformité aux standards web et amélioration du référencement naturel" },
              { title: "SEO & performance", problem: "Votre site n'apparaît pas dans les premiers résultats des moteurs de recherche ou charge lentement", solution: "Audit technique complet, optimisation du code, amélioration du contenu, structure des données et stratégie de mots-clés pour maximiser votre visibilité en ligne", benefit: "Meilleur positionnement dans les résultats de recherche, augmentation du trafic organique qualifié et amélioration des Core Web Vitals pour une expérience utilisateur optimale" },
              { title: "Maintenance & évolution", problem: "Votre site nécessite des mises à jour régulières de sécurité et de fonctionnalités pour rester performant", solution: "Suivi proactif de la sécurité, mises à jour régulières des technologies, surveillance des performances et évolution continue des fonctionnalités selon vos besoins", benefit: "Site sécurisé et toujours à jour, tranquillité d'esprit avec un support technique réactif et capacité d'évolution pour accompagner la croissance de votre activité" },
              { title: "E-commerce", problem: "Vous souhaitez développer votre activité en ligne mais ne disposez pas de plateforme de vente adaptée", solution: "Création de boutiques en ligne sur mesure avec intégration de paiements sécurisés, gestion des stocks et des commandes, et optimisation pour la conversion", benefit: "Nouveau canal de vente 24/7, élargissement de votre clientèle géographique, automatisation des processus de vente et suivi détaillé des performances commerciales" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-bento"
              >
                <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-text-secondary"><span className="font-medium text-accent">Problème :</span> {service.problem}</p>
                  <p className="text-text-secondary"><span className="font-medium text-accent">Solution :</span> {service.solution}</p>
                  <p className="text-text-secondary"><span className="font-medium text-accent">Bénéfice :</span> {service.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a 
              href="/services"
              className="btn btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-2"
            >
              Voir tous les services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 4 - Pourquoi travailler avec moi */}
      <section id="why" className="section-premium py-24 px-4" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="why-heading" className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Pourquoi <span className="text-gradient">travailler avec moi</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Des avantages concrets et tangibles pour la réussite de votre projet digital
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Interlocuteur unique et dédié", desc: "Bénéficiez d'un contact direct et unique pour l'ensemble de votre projet, de la phase de conception initiale jusqu'à la livraison finale, garantissant une communication fluide et une compréhension approfondie de vos besoins" },
              { title: "Développement véritablement sur mesure", desc: "Chaque solution est conçue spécifiquement pour répondre à vos exigences uniques, sans utiliser de templates génériques, assurant une adéquation parfaite entre l'outil digital et vos processus métier existants" },
              { title: "Approche orientée performance", desc: "Priorité absolue accordée à la vitesse de chargement, à l'optimisation pour les moteurs de recherche et à la conformité avec les standards web actuels, garantissant une expérience utilisateur optimale et une visibilité maximale" },
              { title: "Code maintenable et évolutif", desc: "Architecture logicielle propre, bien documentée et structurée selon les meilleures pratiques de développement, facilitant les futures évolutions, la maintenance et l'intégration de nouvelles fonctionnalités" },
              { title: "Accompagnement complet et personnalisé", desc: "Formation approfondie de votre équipe, support technique réactif et disponibilité continue pour vous accompagner dans la prise en main de votre solution et répondre à toutes vos questions" },
              { title: "Communication transparente et régulière", desc: "Reporting périodique sur l'avancement du projet, réunions de suivi programmées et canaux de communication ouverts pour garantir une collaboration sereine et une confiance mutuelle tout au long du partenariat" }
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-bold text-text-main mb-2">{advantage.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 5 - Réalisations */}
      <section id="realisations" className="section-premium py-24 px-4" aria-labelledby="realisations-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="realisations-heading" className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Mes <span className="text-gradient">Réalisations</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Chaque projet est unique et conçu spécifiquement pour répondre aux besoins de mes clients. Discutons ensemble de votre projet pour créer une solution sur mesure.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-bento p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-text-main mb-4">Votre projet mérite une attention personnalisée</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Plutôt que de vous présenter des projets génériques, je préfère consacrer mon temps à comprendre vos besoins spécifiques et à concevoir une solution parfaitement adaptée à votre activité. Chaque client est unique, et chaque projet mérite une approche sur mesure.
              </p>
              <a 
                href="/contact"
                className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-lg"
              >
                Discutons de votre projet
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 6 - Méthode */}
      <section id="methode" className="section-premium py-24 px-4" aria-labelledby="methode-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="methode-heading" className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
              Ma <span className="text-gradient">Méthode</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Un processus structuré et éprouvé pour garantir la réussite de votre projet digital, de la conception initiale jusqu'au déploiement en production
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Échange et découverte", desc: "Première rencontre approfondie pour comprendre votre activité, vos objectifs commerciaux, vos contraintes techniques et vos attentes spécifiques, avec analyse de votre environnement concurrentiel et identification des opportunités digitales" },
              { num: "2", title: "Analyse et stratégie", desc: "Étude détaillée de l'existant technique et fonctionnel, définition précise des spécifications et des livrables, élaboration d'une architecture adaptée et proposition d'une stratégie digitale alignée sur vos objectifs business" },
              { num: "3", title: "Conception et design", desc: "Création des maquettes et prototypes de l'interface utilisateur, définition de l'expérience utilisateur et du parcours client, validation des choix ergonomiques avec votre équipe et finalisation du design system" },
              { num: "4", title: "Développement itératif", desc: "Réalisation technique en sprints courts avec validations régulières, développement des fonctionnalités selon les meilleures pratiques, tests unitaires et intégration continue pour garantir la qualité du code" },
              { num: "5", title: "Livraison et formation", desc: "Déploiement en environnement de production, tests finaux de validation, formation approfondie de votre équipe à l'utilisation de la solution, documentation technique et support pendant la période de transition" },
              { num: "6", title: "Suivi et évolution", desc: "Support technique réactif après la livraison, surveillance des performances et de la sécurité, mise à jour régulière des technologies, et accompagnement pour les futures évolutions et nouvelles fonctionnalités" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 7 - À propos */}
      <section id="about" className="section-premium py-24 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 text-text-main">
              À <span className="text-gradient">propos</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Développeur web freelance passionné par la création de solutions digitales performantes et innovantes. Basé en Île-de-France, j'accompagne les entreprises et indépendants dans leur transformation digitale avec une approche orientée résultats et satisfaction client, combinant expertise technique et compréhension approfondie des enjeux business.
            </p>
            <a 
              href="/about"
              className="btn btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-2"
            >
              En savoir plus sur mon parcours et mon expertise
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Section 8 - CTA final */}
      <section id="cta" className="py-28 px-4" aria-labelledby="cta-heading">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="card-bento p-10 md:p-14 text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-main tracking-tight leading-tight">
              Vous avez un projet web ou une application à faire évoluer ?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-text-secondary font-medium max-w-xl mx-auto leading-relaxed">
              Discutons-en lors d'un échange gratuit et sans engagement pour explorer ensemble les opportunités de transformation digitale de votre activité
            </p>
            
            <motion.a 
              href="/contact"
              className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-lg focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
              Échanger sur votre projet
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </motion.a>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-text-secondary text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" aria-hidden="true" />
                Premier échange sans engagement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" aria-hidden="true" />
                Réponse garantie sous 24 heures
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" aria-hidden="true" />
                Intervention en Île-de-France et à distance
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
