import { getBlogArticleBySlug } from '../data/blog-articles.ts';

const SITE_NAME = 'Développeur Web Freelance Angular & Laravel';
export const BASE_URL = 'https://www.abderrahmane-elfarouahfreelance.com';

export interface PageSEOMeta {
  title: string;
  description: string;
  noIndex?: boolean;
}

const pageSEO: Record<string, PageSEOMeta> = {
  '/': {
    title: 'Développeur Angular Freelance Île-de-France | Spécialiste Laravel & Fullstack',
    description:
      "Développeur web freelance à Mantes-la-Jolie. Spécialisé Angular, Laravel, TypeScript. Création d'applications sur mesure pour PME et startups.",
  },
  '/about': {
    title: 'À Propos | Développeur Freelance Angular Laravel Mantes-la-Jolie (78)',
    description:
      "Développeur web freelance Angular & Laravel basé à Mantes-la-Jolie, Yvelines (78). Développement fullstack, interopérabilité AS400, transformation digitale en Île-de-France.",
  },
  '/services': {
    title: 'Services Développement Web Angular Laravel Freelance France',
    description:
      "Services de développement web : Angular, Laravel, API REST, SaaS sur mesure pour entreprises en Île-de-France.",
  },
  '/projects': {
    title: 'Portfolio Développeur Angular Laravel Freelance',
    description:
      "Découvrez des projets web Angular et Laravel réalisés pour entreprises et startups.",
  },
  '/blog': {
    title: 'Blog Développement Web | Angular, Laravel & React',
    description:
      'Blog technique sur Angular, Laravel, React et le développement web. Articles, tutoriels et conseils SEO pour entreprises et startups.',
  },
  '/experience': {
    title: 'Expérience Développeur Fullstack Freelance Angular Laravel',
    description: 'Parcours et expérience en développement web fullstack pour projets complexes.',
  },
  '/faq': {
    title: 'FAQ Développeur Angular Freelance | Tarifs, Délais & Services',
    description:
      "Questions fréquentes sur les tarifs d'un développeur Angular freelance, délais de création d'applications web, et services proposés en Île-de-France.",
  },
  '/zones-intervention': {
    title: "Zones d'intervention | Développeur Web Angular Île-de-France",
    description:
      "Développeur Angular freelance intervenant à Mantes-la-Jolie, Versailles, Saint-Germain-en-Laye et toute l'Île-de-France. Télétravail ou déplacements.",
  },
  '/contact': {
    title: 'Contactez un développeur web freelance pour vos projets sur mesure',
    description:
      "Besoin d'un développeur web freelance pour votre projet ? Contactez-moi pour discuter de vos besoins et obtenir un devis gratuit.",
  },
  '/mentions-legales': {
    title: `${SITE_NAME} | Abderrahmane El Farouah`,
    description:
      "Développeur web freelance Angular & Laravel à Mantes-la-Jolie. Création d'applications web performantes, sites sur mesure et SEO pour entreprises et startups.",
  },
  '/confidentialite': {
    title: 'Politique de confidentialité | Abderrahmane El Farouah',
    description:
      'Informations sur les données personnelles, les cookies, les services publicitaires et vos choix de confidentialité sur ce site.',
  },
  '/privacy': {
    title: 'Politique de confidentialité | Abderrahmane El Farouah',
    description:
      'Informations sur les données personnelles, les cookies, les services publicitaires et vos choix de confidentialité sur ce site.',
    noIndex: true,
  },
  '/cgv': {
    title: 'Conditions Générales de Vente | Développeur Web Freelance',
    description:
      "Conditions générales de vente pour les prestations de développement web freelance d'Abderrahmane El Farouah.",
  },
  '/developpeur-angular-freelance': {
    title: 'Développeur Angular Freelance | Abderrahmane El Farouah',
    description:
      'Développeur Angular freelance à Mantes-la-Jolie et en Île-de-France pour applications web sur mesure, maintenance et refonte front-end.',
  },
  '/developpeur-laravel-freelance': {
    title: 'Développeur Laravel Freelance | Abderrahmane El Farouah',
    description:
      'Développeur Laravel freelance pour API, backends métier, applications web et intégrations sur mesure.',
  },
  '/creation-site-web-yvelines': {
    title: 'Création Site Web Yvelines | Abderrahmane El Farouah',
    description:
      'Création de sites web professionnels dans les Yvelines pour artisans, PME, indépendants et entreprises locales.',
  },
  '/applications-web-sur-mesure': {
    title: 'Applications Web Sur Mesure | Abderrahmane El Farouah',
    description:
      "Développement d'applications web sur mesure pour automatiser vos processus métier et centraliser vos outils.",
  },
};

export function resolvePageSEO(pathname: string): PageSEOMeta {
  const staticPage = pageSEO[pathname];
  if (staticPage) return staticPage;

  const blogSlugMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogSlugMatch) {
    const article = getBlogArticleBySlug(blogSlugMatch[1]);
    if (article) {
      return {
        title: `${article.title} | Blog Développement Web`,
        description: article.excerpt,
      };
    }

    return {
      title: 'Article non trouvé | Blog',
      description: 'Cet article de blog est introuvable ou a été déplacé.',
      noIndex: true,
    };
  }

  return {
    title: 'Page non trouvée',
    description: 'La page demandée est introuvable ou a été déplacée.',
    noIndex: true,
  };
}

export function buildCanonical(pathname: string): string {
  const canonicalPath = pathname === '/privacy' ? '/confidentialite' : pathname;
  const clean = canonicalPath === '/' ? '' : canonicalPath.replace(/\/+$/, '');
  return `${BASE_URL}${clean}`;
}
