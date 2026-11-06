import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import LandingPage from '../components/shared/LandingPage';

const page = {
  title: "Création de site web dans les Yvelines",
  intro: "Sites vitrines et boutiques en ligne pour les entreprises et artisans des Yvelines (Versailles, Saint-Germain-en-Laye, Poissy, Montigny-le-Bretonneux…). Je suis à Mantes-la-Jolie et je travaille surtout à distance.",
  cards: [
    {
      title: "Site vitrine",
      text: "Un site pour présenter votre activité, pensé pour les commerçants, les artisans et les professions libérales.",
      points: [
        "Affichage soigné sur mobile et ordinateur",
        "Référencement local",
      ],
    },
    {
      title: "Boutique en ligne",
      text: "Paiement sécurisé, gestion des stocks et des commandes, espace d'administration.",
      points: [
        "Paiement par carte bancaire",
        "Suivi des stocks",
        "Tableau de bord d'administration",
      ],
    },
    {
      title: "Maintenance",
      text: "Mises à jour de sécurité et sauvegardes après la mise en ligne.",
      points: [
        "Sauvegardes",
        "Mises à jour de sécurité",
      ],
    },
  ],
  ctaTitle: "Un site à lancer dans les Yvelines ?",
  ctaText: "Parlez-moi de votre activité. Je vous réponds avec un devis gratuit.",
  ctaLabel: "Demander un devis",
};

function CreationSiteWebYvelines() {
  return (
    <>
      <Helmet>
        <title>Création Site Web Yvelines | Abderrahmane El Farouah</title>
        <meta name="description" content="Création de sites web professionnels dans les Yvelines (78). Développeur freelance spécialisé en sites vitrines, e-commerce et applications web sur mesure pour entreprises et artisans." />
        <meta name="keywords" content="création site web Yvelines, développement web Yvelines, site vitrine professionnel Yvelines, freelance web Yvelines, développeur site internet Versailles, Saint-Germain-en-Laye" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Création Site Web Yvelines | Abderrahmane El Farouah" />
        <meta property="og:description" content="Création de sites web professionnels dans les Yvelines. Développeur freelance spécialisé en sites vitrines et e-commerce." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/creation-site-web-yvelines" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Création Site Web Yvelines | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Création de sites web professionnels dans les Yvelines." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <LandingPage {...page} />
    </>
  );
}

export const Route = createFileRoute('/creation-site-web-yvelines')({
  component: CreationSiteWebYvelines,
})
