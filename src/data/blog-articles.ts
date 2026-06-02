export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    title: 'Pourquoi choisir Angular pour votre application métier ?',
    excerpt:
      "Découvrez les avantages d'Angular pour le développement d'applications web robustes et maintenables pour les entreprises.",
    date: '2026-04-15',
    readTime: '5 min',
    slug: 'pourquoi-angular-application-metier',
    category: 'Angular',
  },
  {
    id: 2,
    title: 'Laravel vs Node.js : quel framework choisir en 2026 ?',
    excerpt:
      'Comparatif technique et stratégique entre Laravel et Node.js pour vos projets web backend.',
    date: '2026-04-22',
    readTime: '7 min',
    slug: 'laravel-vs-nodejs-quel-choisir',
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Combien coûte un développeur freelance à Mantes-la-Jolie ?',
    excerpt:
      'Guide des tarifs 2026 pour les prestations de développement web freelance dans les Yvelines et Île-de-France.',
    date: '2026-03-28',
    readTime: '4 min',
    slug: 'combien-coute-developpeur-freelance',
    category: 'Tarifs',
  },
  {
    id: 4,
    title: 'Créer une application web sur mesure : le guide complet',
    excerpt:
      'Tout ce que vous devez savoir pour développer une application web personnalisée pour votre entreprise.',
    date: '2026-03-10',
    readTime: '8 min',
    slug: 'creer-application-web-sur-mesure',
    category: 'Guide',
  },
  {
    id: 5,
    title: 'SEO technique : optimiser la performance de votre site React',
    excerpt:
      'Les bonnes pratiques pour améliorer le référencement et la vitesse de votre application React ou Angular.',
    date: '2026-02-20',
    readTime: '6 min',
    slug: 'seo-technique-optimiser-react',
    category: 'SEO',
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
