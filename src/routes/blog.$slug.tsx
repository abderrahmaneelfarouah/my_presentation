import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Container from '../components/shared/Container';

// Données des articles (en pratique, ces données viendraient d'une API ou d'un CMS)
const articlesData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}> = {
  'pourquoi-angular-application-metier': {
    title: 'Pourquoi choisir Angular pour votre application métier ?',
    excerpt: 'Découvrez les avantages d\'Angular pour le développement d\'applications web robustes et maintenables pour les entreprises.',
    date: '2026-04-15',
    readTime: '5 min',
    category: 'Angular',
    author: 'Abderrahmane El Farouah',
    content: `
## Introduction

Angular est un framework développé par Google qui offre une solution complète pour la création d'applications web d'entreprise. Dans cet article, nous explorerons pourquoi Angular reste un choix privilégié pour les applications métier en 2026.

## Les avantages d'Angular

### 1. Architecture robuste
Angular propose une architecture MVC (Model-View-Controller) bien définie qui facilite la maintenance et l'évolution des applications à long terme.

### 2. TypeScript natif
Développé avec TypeScript, Angular offre un typage fort qui réduit les erreurs et améliore la qualité du code.

### 3. Ecosystème complet
Avec Angular, vous avez accès à :
- Un router puissant
- Des formulaires réactifs
- Un client HTTP intégré
- Des animations performantes

### 4. Performance optimale
Le rendu côté serveur (SSR) avec Angular Universal améliore le SEO et les temps de chargement initiaux.

## Conclusion

Pour les applications métier complexes nécessitant une maintenance à long terme, Angular reste un excellent choix grâce à sa structure rigoureuse et son écosystème mature.
    `
  },
  'laravel-vs-nodejs-quel-choisir': {
    title: 'Laravel vs Node.js : quel framework choisir en 2026 ?',
    excerpt: 'Comparatif technique et stratégique entre Laravel et Node.js pour vos projets web backend.',
    date: '2026-04-22',
    readTime: '7 min',
    category: 'Backend',
    author: 'Abderrahmane El Farouah',
    content: `
## Introduction

Le choix entre Laravel (PHP) et Node.js (JavaScript) pour le backend est une décision cruciale pour tout projet web. Analysons les forces de chaque technologie.

## Laravel : le framework PHP mature

### Avantages
- **Ecosystème riche** : Eloquent ORM, Blade templating, queues
- **Documentation exhaustive** et communauté active
- **Sécurité intégrée** : Protection CSRF, XSS, SQL injection
- **Déploiement simple** sur la plupart des hébergeurs

### Idéal pour
- Applications CRM/ERP
- Sites e-commerce
- APIs REST complexes

## Node.js : la performance JavaScript

### Avantages
- **Performance** : Event loop non-bloquant
- **JavaScript fullstack** : Même langage côté client et serveur
- **NPM** : Plus grand écosystème de packages
- **Temps réel** : WebSockets natifs

### Idéal pour
- Applications temps réel
- Microservices
- Streaming de données

## Notre recommandation

Pour les projets enterprise avec une logique métier complexe, **Laravel** offre une productivité supérieure. Pour les applications nécessitant une haute performance temps réel, **Node.js** est préférable.
    `
  },
  'combien-coute-developpeur-freelance': {
    title: 'Combien coûte un développeur freelance à Mantes-la-Jolie ?',
    excerpt: 'Guide des tarifs 2026 pour les prestations de développement web freelance dans les Yvelines et Île-de-France.',
    date: '2026-03-28',
    readTime: '4 min',
    category: 'Tarifs',
    author: 'Abderrahmane El Farouah',
    content: `
## Les tarifs du développement web freelance en 2026

### Site vitrine professionnel
- **Prix** : 300€ à 400€
- **Délai** : 3 à 5 jours
- **Inclus** : Design responsive, formulaire de contact, optimisation SEO

### Application métier sur mesure
- **Prix** : Sur devis
- **Délai** : 2 à 8 semaines
- **Inclus** : Développement fullstack, formation, support 3 mois

### Boutique en ligne
- **Prix** : Sur devis
- **Délai** : 2 à 4 semaines
- **Inclus** : Paiement CB, gestion stocks, relances automatiques

## Facteurs influençant le prix

1. **Complexité fonctionnelle**
2. **Intégrations tierces** (APIs, paiement)
3. **Design personnalisé**
4. **Deadlines urgentes**

## Pourquoi choisir un freelance local ?

- Disponibilité pour des réunions en présentiel
- Compréhension du marché local
- Relation de proximité et suivi personnalisé

## Mon engagement

Je propose des tarifs transparents et compétitifs pour les entreprises des Yvelines et d'Île-de-France, avec un accompagnement complet du projet.
    `
  },
  'creer-application-web-sur-mesure': {
    title: 'Créer une application web sur mesure : le guide complet',
    excerpt: 'Tout ce que vous devez savoir pour développer une application web personnalisée pour votre entreprise.',
    date: '2026-03-10',
    readTime: '8 min',
    category: 'Guide',
    author: 'Abderrahmane El Farouah',
    content: `
## Les étapes clés d'un projet sur mesure

### 1. Analyse des besoins
Avant de commencer tout développement, il est essentiel de comprendre :
- Les processus métier existants
- Les points de douleur
- Les objectifs de croissance

### 2. Conception technique
Cette phase inclut :
- L'architecture de la base de données
- Le choix des technologies
- La planification des sprints

### 3. Développement itératif
Méthodologie agile avec :
- Des livraisons régulières
- Des démonstrations fréquentes
- Une adaptation continue

### 4. Tests et qualité
- Tests unitaires automatisés
- Tests d'intégration
- Recette utilisateur

### 5. Déploiement et formation
- Mise en production sécurisée
- Formation des équipes
- Documentation technique

## Technologies recommandées

**Frontend** : Angular, React, Vue.js
**Backend** : Laravel, Node.js, Symfony
**Base de données** : PostgreSQL, MySQL, MongoDB

## Budget indicatif

Un projet sur mesure complet représente généralement un investissement de 5 000€ à 50 000€ selon la complexité.
    `
  },
  'seo-technique-optimiser-react': {
    title: 'SEO technique : optimiser la performance de votre site React',
    excerpt: 'Les bonnes pratiques pour améliorer le référencement et la vitesse de votre application React ou Angular.',
    date: '2026-02-20',
    readTime: '6 min',
    category: 'SEO',
    author: 'Abderrahmane El Farouah',
    content: `
## Pourquoi le SEO technique est crucial

Google privilégie les sites rapides et bien structurés. Voici comment optimiser votre application React/Angular.

## 1. Server-Side Rendering (SSR)

Utilisez :
- **Next.js** pour React
- **Angular Universal** pour Angular

Cela permet aux moteurs de recherche d'indexer votre contenu dynamique.

## 2. Core Web Vitals

Optimisez ces trois métriques :
- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0.1

## 3. Structure sémantique

Utilisez correctement les balises HTML :
- Une seule balise <h1> par page
- Structure logique des headings
- Attributs alt sur les images

## 4. Meta tags dynamiques

Implémentez des meta tags adaptatifs :
- Title et description uniques par page
- Open Graph pour les réseaux sociaux
- Canonical URLs correctes

## 5. Performance

Techniques d'optimisation :
- Code splitting et lazy loading
- Compression des images (WebP)
- Mise en cache stratégique
- Minification des assets

## 6. Schema.org

Ajoutez des données structurées pour :
- Articles de blog
- Pages de services
- Informations d'entreprise

## Conclusion

Un bon SEO technique est la fondation de tout référencement réussi. Investissez dans ces optimisations dès le début du projet.
    `
  }
};

function BlogArticle() {
  const { slug } = Route.useParams();
  const article = articlesData[slug];

  if (!article) {
    return (
      <Container className="py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-main mb-4">Article non trouvé</h1>
          <p className="text-text-secondary mb-6">Cet article n'existe pas ou a été déplacé.</p>
          <a href="/blog" className="text-accent hover:underline">Retour au blog</a>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Blog Abderrahmane El Farouah</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.category.toLowerCase()}, développement web, freelance Yvelines`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Container className="py-12 max-w-4xl">
          {/* Back link */}
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </motion.a>

          {/* Article header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </span>
            </div>
          </motion.header>

          {/* Article content */}
          <motion.article
            className="prose prose-lg max-w-none dark:prose-invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: 'var(--text-main)'
            }}
          >
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="whitespace-pre-line text-text-main leading-relaxed">
              {article.content}
            </div>
          </motion.article>

          {/* CTA */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-text-main mb-4">
              Vous avez un projet {article.category.toLowerCase()} ?
            </h3>
            <p className="text-text-secondary mb-6">
              Discutons de votre projet et obtenez un devis personnalisé gratuitement.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Me contacter</span>
            </motion.a>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export const Route = createFileRoute('/blog/$slug')({
  component: BlogArticle,
});
