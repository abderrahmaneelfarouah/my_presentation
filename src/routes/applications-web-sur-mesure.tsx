import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import LandingPage from '../components/shared/LandingPage';

const page = {
  title: "Applications web sur mesure",
  intro: "Des applications web qui automatisent des tâches répétitives et centralisent vos données, en Angular et Laravel.",
  cards: [
    {
      title: "Gestion d'activité",
      text: "Suivi des clients, facturation, planning et stocks dans un seul outil.",
      points: [
        "Interface utilisable sur mobile",
        "Automatisation des tâches répétitives",
        "Tableaux de bord et statistiques",
      ],
    },
    {
      title: "Intégrations et API",
      text: "Connexion de l'application avec vos outils existants.",
      points: [
        "API REST",
        "Webhooks et automatisations",
      ],
    },
  ],
  ctaTitle: "Une application à construire ?",
  ctaText: "Décrivez-moi votre besoin. Je vous réponds avec un devis gratuit.",
  ctaLabel: "Demander un devis",
};

function ApplicationsWebSurMesure() {
  return (
    <>
      <Helmet>
        <title>Applications Web Sur Mesure | Abderrahmane El Farouah</title>
        <meta name="description" content="Développement d'applications web sur mesure pour entreprises et startups. Solutions logicielles personnalisées avec Angular, Laravel et React." />
        <meta name="keywords" content="applications web sur mesure, développement logiciel personnalisé, Angular sur mesure, Laravel sur mesure, freelance développement applications, entreprise applications métier" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Applications Web Sur Mesure | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développement d'applications web sur mesure pour entreprises et startups. Solutions logicielles personnalisées." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/applications-web-sur-mesure" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Applications Web Sur Mesure | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développement d'applications web sur mesure pour entreprises." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <LandingPage {...page} />
    </>
  );
}

export const Route = createFileRoute('/applications-web-sur-mesure')({
  component: ApplicationsWebSurMesure,
})
