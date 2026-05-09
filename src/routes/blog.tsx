import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Container from '../components/shared/Container';
import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Pourquoi choisir Angular pour votre application métier ?',
    excerpt: 'Découvrez les avantages d\'Angular pour le développement d\'applications web robustes et maintenables pour les entreprises.',
    date: '2026-04-15',
    slug: 'pourquoi-angular-application-metier',
    category: 'Angular',
  },
  {
    id: 2,
    title: 'Laravel vs Node.js : quel framework choisir en 2026 ?',
    excerpt: 'Comparatif technique et stratégique entre Laravel et Node.js pour vos projets web backend.',
    date: '2026-04-22',
    slug: 'laravel-vs-nodejs-quel-choisir',
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Combien coûte un développeur freelance à Mantes-la-Jolie ?',
    excerpt: 'Guide des tarifs 2026 pour les prestations de développement web freelance dans les Yvelines et Île-de-France.',
    date: '2026-03-28',
    slug: 'combien-coute-developpeur-freelance',
    category: 'Tarifs',
  },
  {
    id: 4,
    title: 'Créer une application web sur mesure : le guide complet',
    excerpt: 'Tout ce que vous devez savoir pour développer une application web personnalisée pour votre entreprise.',
    date: '2026-03-10',
    slug: 'creer-application-web-sur-mesure',
    category: 'Guide',
  },
  {
    id: 5,
    title: 'SEO technique : optimiser la performance de votre site React',
    excerpt: 'Les bonnes pratiques pour améliorer le référencement et la vitesse de votre application React ou Angular.',
    date: '2026-02-20',
    slug: 'seo-technique-optimiser-react',
    category: 'SEO',
  },
];

const ArticleCard = React.memo(function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: article.slug }}
      className="block h-full"
      aria-label={`Lire l'article : ${article.title}`}
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="card-bento h-full p-6 hover:shadow-md transition-shadow duration-200"
        style={{ willChange: 'transform', contain: 'layout style paint' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-text-main mb-3">
          {article.title}
        </h2>
        
        <p className="text-text-secondary mb-5 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-text-muted mb-5">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString('fr-FR')}
          </span>
        </div>
        
        <div className="flex items-center text-accent font-medium">
          <span>Lire l'article</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </motion.article>
    </Link>
  );
});

function Blog() {
  const { location } = useRouterState();

  if (location.pathname !== '/blog') {
    return <Outlet />;
  }

  return (
    <>
      <Helmet>
        <title>Blog Développement Web | Abderrahmane El Farouah</title>
        <meta name="description" content="Blog technique sur Angular, Laravel, React et le développement web. Articles, tutoriels et conseils pour entreprises et développeurs." />
        <meta name="keywords" content="blog développement web, tutoriel Angular, Laravel guide, React conseils, SEO technique, freelance Yvelines" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog Développement Web | Abderrahmane El Farouah" />
        <meta property="og:description" content="Blog technique sur Angular, Laravel et le développement web moderne." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/blog" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Développement Web | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Blog technique Angular, Laravel, React." />
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
              Blog <span className="text-accent">Développement Web</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Articles, tutoriels et conseils sur Angular, Laravel, React et le développement web moderne pour entreprises et startups.
            </motion.p>
          </header>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-text-main mb-4">Vous avez un projet web ?</h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé pour votre application ou site web.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Discuter de votre projet</span>
            </motion.a>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export const Route = createFileRoute('/blog')({
  component: Blog,
})
