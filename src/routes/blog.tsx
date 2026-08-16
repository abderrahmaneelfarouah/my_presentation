import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Container from '../components/shared/Container';
import { BLOG_ARTICLES, type BlogArticle } from '../data/blog-articles';
import React from 'react';

const ArticleCard = React.memo(function ArticleCard({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) {
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
        className="card-bento p-6 h-full cursor-pointer hover:shadow-md transition-shadow duration-200"
        style={{ willChange: 'transform', contain: 'layout style paint' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>

        <h2 className="text-xl font-bold text-text-main mb-3">{article.title}</h2>

        <p className="text-text-secondary mb-4 line-clamp-3">{article.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
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
    <div className="min-h-screen page-shell">
      <Container className="py-12">
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
            Articles, tutoriels et conseils sur Angular, Laravel, React et le développement web
            moderne pour entreprises et startups.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BLOG_ARTICLES.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center card-bento p-8"
        >
          <h2 className="text-2xl font-bold text-text-main mb-4">Vous avez un projet web ?</h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé pour votre
            application ou site web.
          </p>
          <Link
            to="/contact"
            className="btn btn-premium inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Discuter de votre projet</span>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}

export const Route = createFileRoute('/blog')({
  component: Blog,
});
