import { Helmet } from 'react-helmet-async';
import { useRouterState } from '@tanstack/react-router';
import { useMemo } from 'react';
import { getBlogArticleBySlug } from '../data/blog-articles';
import { BASE_URL, buildCanonical, resolvePageSEO } from '../utils/page-seo';
import { pageStructuredData } from '../utils/structuredData';
import { siteBuildInfo } from '../buildInfo';

// ─── Config ───────────────────────────────────

const SITE_NAME = 'Développeur Web Freelance Angular & Laravel';
const TWITTER_HANDLE = '@abdeelfarouah';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

// ─── Types ────────────────────────────────────

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: object;
}

// Breadcrumb mapping pour navigation hiérarchique complète
const breadcrumbMap: Record<string, Array<{ name: string; path: string }>> = {
  '/': [{ name: 'Accueil', path: '/' }],
  '/services': [{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }],
  '/projects': [{ name: 'Accueil', path: '/' }, { name: 'Réalisations', path: '/projects' }],
  '/blog': [{ name: 'Accueil', path: '/' }, { name: 'Blog', path: '/blog' }],
  '/faq': [{ name: 'Accueil', path: '/' }, { name: 'FAQ', path: '/faq' }],
  '/zones-intervention': [{ name: 'Accueil', path: '/' }, { name: 'Zones d\'intervention', path: '/zones-intervention' }],
  '/about': [{ name: 'Accueil', path: '/' }, { name: 'À propos', path: '/about' }],
  '/experience': [{ name: 'Accueil', path: '/' }, { name: 'Expérience', path: '/experience' }],
  '/contact': [{ name: 'Accueil', path: '/' }, { name: 'Contact', path: '/contact' }],
  '/mentions-legales': [{ name: 'Accueil', path: '/' }, { name: 'Mentions légales', path: '/mentions-legales' }],
  '/confidentialite': [{ name: 'Accueil', path: '/' }, { name: 'Confidentialité', path: '/confidentialite' }],
  '/cgv': [{ name: 'Accueil', path: '/' }, { name: 'CGV', path: '/cgv' }],
  '/developpeur-angular-freelance': [{ name: 'Accueil', path: '/' }, { name: 'Angular Freelance', path: '/developpeur-angular-freelance' }],
  '/developpeur-laravel-freelance': [{ name: 'Accueil', path: '/' }, { name: 'Laravel Freelance', path: '/developpeur-laravel-freelance' }],
  '/creation-site-web-yvelines': [{ name: 'Accueil', path: '/' }, { name: 'Site Web Yvelines', path: '/creation-site-web-yvelines' }],
  '/applications-web-sur-mesure': [{ name: 'Accueil', path: '/' }, { name: 'Applications Sur Mesure', path: '/applications-web-sur-mesure' }],
};

function buildBreadcrumbStructuredData(pathname: string) {
  const blogSlugMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogSlugMatch) {
    const article = getBlogArticleBySlug(blogSlugMatch[1]);
    const crumbs = [
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: article?.title ?? 'Article', path: pathname },
    ];
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path === '/' ? BASE_URL : `${BASE_URL}${crumb.path}`,
      })),
    };
  }

  const crumbs = breadcrumbMap[pathname] || [{ name: 'Accueil', path: '/' }, { name: 'Page', path: pathname }];
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === '/' ? BASE_URL : `${BASE_URL}${crumb.path}`
    }))
  };
}

// Speakable pour AI voice search
function buildSpeakableSpecification() {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-speakable-headline", ".ai-speakable-summary"]
  };
}

function toAbsoluteImageUrl(image: string): string {
  if (image.startsWith('http')) return image;
  return `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
}

// ─── Composant ────────────────────────────────

export default function SEO({
  title,
  description,
  image,
  type,
  noIndex = false,
  structuredData,
}: SEOProps) {
  const { location } = useRouterState();
  const pathname = location.pathname;

  const pageSpecific = resolvePageSEO(pathname);
  const blogSlugMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const blogArticle = blogSlugMatch ? getBlogArticleBySlug(blogSlugMatch[1]) : undefined;

  const finalTitle       = title       || pageSpecific.title || SITE_NAME;
  const finalDescription = description || pageSpecific.description || "Développeur web freelance Angular, Laravel et React basé à Mantes-la-Jolie.";
  const finalImage       = toAbsoluteImageUrl(image || DEFAULT_IMAGE);
  const finalType        = type || (blogArticle ? 'article' : 'website');
  const finalNoIndex     = noIndex || pageSpecific.noIndex || false;

  const canonicalUrl = buildCanonical(pathname);
  const robotsContent = finalNoIndex ? 'noindex, nofollow' : 'index, follow';

  // ─── Structured Data ─────────────────────────

  const structuredDataList = useMemo(() => {
    const professionalService = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Abderrahmane El Farouah - Développeur Web Fullstack Freelance Angular Laravel",
      "alternateName": [
        "Développeur Angular freelance Yvelines",
        "Développeur Laravel freelance Île-de-France",
        "Freelance développeur web Mantes-la-Jolie"
      ],
      "description": "Développeur web fullstack freelance spécialisé Angular, React, Laravel et Node.js, basé à Mantes-la-Jolie dans les Yvelines. Création d'applications web sur mesure, sites e-commerce performants et solutions digitales pour entreprises en Île-de-France et partout en France.",
      
      "url": BASE_URL,
      "telephone": "+33760751350",
      "email": "abde.elfarouah@gmail.com",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 Rue du Commandant Bouchet",
        "addressLocality": "Mantes-la-Jolie",
        "postalCode": "78200",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.9900,
        "longitude": 1.7170
      },

      "areaServed": [
        { "@type": "City", "name": "Mantes-la-Jolie" },
        { "@type": "City", "name": "Versailles" },
        { "@type": "City", "name": "Saint-Germain-en-Laye" },
        { "@type": "AdministrativeArea", "name": "Yvelines" },
        { "@type": "AdministrativeArea", "name": "Île-de-France" },
        { "@type": "Country", "name": "France" }
      ],

      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },

      "sameAs": [
        "https://www.linkedin.com/in/abderrahmaneelfarouah/",
        "https://github.com/abderrahmaneelfarouah",
        "https://www.malt.fr/profile/abderrahmaneelfarouah"
      ],

      "knowsAbout": [
        "Angular",
        "React",
        "Laravel",
        "PHP",
        "Node.js",
        "TypeScript",
        "SEO technique",
        "Progressive Web Apps (PWA)",
        "API REST",
        "Développement fullstack",
        "Optimisation performance web",
        "Accessibilité web"
      ],

      "serviceType": [
        "Développement web fullstack freelance",
        "Création application web Angular sur mesure",
        "Développement Laravel backend API",
        "Création site e-commerce performant",
        "Développeur React freelance Île-de-France",
        "Développement PWA mobile web",
        "Optimisation SEO technique site web",
        "Maintenance et refonte site web"
      ],

      "availableLanguage": ["fr","en"],

      "currenciesAccepted": "EUR",
      "paymentAccepted": ["Bank Transfer"],

      "priceRange": "€€€",

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services développement web freelance Yvelines",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Développement application web Angular sur mesure Yvelines",
            "itemOffered": {
              "@type": "Service",
              "name": "Création application web Angular",
              "description": "Développement d'applications web modernes Angular pour entreprises en Île-de-France, performantes, sécurisées et évolutives."
            }
          },
          {
            "@type": "Offer",
            "name": "Développement backend Laravel API REST",
            "itemOffered": {
              "@type": "Service",
              "name": "Développement Laravel",
              "description": "Création d'API REST sécurisées avec Laravel pour applications web et mobiles."
            }
          },
          {
            "@type": "Offer",
            "name": "Création site e-commerce SEO optimisé",
            "itemOffered": {
              "@type": "Service",
              "name": "Développement e-commerce",
              "description": "Création de boutiques en ligne performantes avec optimisation SEO, conversion et sécurité."
            }
          },
          {
            "@type": "Offer",
            "name": "Développement Progressive Web App (PWA)",
            "itemOffered": {
              "@type": "Service",
              "name": "Création PWA",
              "description": "Applications web mobiles rapides installables, adaptées aux usages mobiles modernes."
            }
          },
          {
            "@type": "Offer",
            "name": "Optimisation SEO technique développeur web",
            "itemOffered": {
              "@type": "Service",
              "name": "Audit SEO technique",
              "description": "Amélioration des performances, du Core Web Vitals et du référencement naturel."
            }
          }
        ]
      }
    };

    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_NAME,
      url: BASE_URL,
      jobTitle: "Développeur web fullstack freelance",
      sameAs: professionalService.sameAs
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: BASE_URL,
      name: SITE_NAME,
      identifier: siteBuildInfo.version,
      dateModified: siteBuildInfo.builtAt
    };

    const breadcrumb = buildBreadcrumbStructuredData(pathname);
    const speakable = buildSpeakableSpecification();

    const blogPosting = blogArticle
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: blogArticle.title,
          description: blogArticle.excerpt,
          datePublished: blogArticle.date,
          author: {
            '@type': 'Person',
            name: 'Abderrahmane El Farouah',
          },
          mainEntityOfPage: canonicalUrl,
        }
      : null;

    return [
      structuredData ?? professionalService,
      person,
      website,
      breadcrumb,
      speakable,
      pageStructuredData[pathname as keyof typeof pageStructuredData],
      blogPosting,
    ].filter(Boolean);

  }, [pathname, structuredData, blogArticle, canonicalUrl]);

  // ─── Render ─────────────────────────────────

  return (
    <Helmet>

      <html lang="fr" />

      {/* META */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      <meta name="site-version" content={siteBuildInfo.version} />
      <meta name="site-package-version" content={siteBuildInfo.packageVersion} />
      <meta name="site-build-commit" content={siteBuildInfo.commit} />
      <meta name="site-build-branch" content={siteBuildInfo.branch} />
      <meta name="site-build-date" content={siteBuildInfo.builtAt} />

      {/* CANONICAL */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" type="application/json" href="/site-version.json" />
      <link rel="version-history" href="/site-version.txt" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD */}
      {structuredDataList.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}

    </Helmet>
  );
}
