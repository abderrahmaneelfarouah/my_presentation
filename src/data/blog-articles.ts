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
    title: 'Pourquoi choisir Angular pour une application métier ?',
    excerpt:
      "Les critères qui rendent Angular adapté à certaines applications métier, ses limites et un exemple d’architecture avec une API Laravel.",
    date: '2026-04-15',
    readTime: '12 min',
    slug: 'pourquoi-angular-application-metier',
    category: 'Angular',
  },
  {
    id: 2,
    title: 'Laravel ou Node.js : choisir une solution backend en 2026',
    excerpt:
      'Laravel est un framework PHP et Node.js un runtime JavaScript : comparez les usages, le coût d’exploitation et la maintenance avec un test concret.',
    date: '2026-04-22',
    readTime: '6 min',
    slug: 'laravel-vs-nodejs-quel-choisir',
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Combien coûte un développeur freelance à Mantes-la-Jolie ?',
    excerpt:
      'Comprendre les facteurs qui influencent un budget web, comparer les éléments d’un devis et préparer une demande de chiffrage claire.',
    date: '2026-03-28',
    readTime: '6 min',
    slug: 'combien-coute-developpeur-freelance',
    category: 'Tarifs',
  },
  {
    id: 4,
    title: 'Créer une application web sur mesure : le guide complet',
    excerpt:
      'Du processus métier au MVP : cadrer les parcours, la sécurité des données, la recette, l’adoption et la maintenance.',
    date: '2026-03-10',
    readTime: '7 min',
    slug: 'creer-application-web-sur-mesure',
    category: 'Guide',
  },
  {
    id: 5,
    title: 'SEO technique : optimiser la performance de votre site React',
    excerpt:
      'Vérifier le HTML livré, choisir entre CSR, SSR et SSG, contrôler les métadonnées et mesurer les performances d’un site React.',
    date: '2026-02-20',
    readTime: '7 min',
    slug: 'seo-technique-optimiser-react',
    category: 'SEO',
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
