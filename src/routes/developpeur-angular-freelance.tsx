import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import LandingPage from '../components/shared/LandingPage';

const page = {
  title: "Développeur Angular freelance",
  intro: "Applications web en Angular et TypeScript pour des entreprises et des startups. Je suis à Mantes-la-Jolie et je travaille surtout à distance.",
  cards: [
    {
      title: "Applications métier",
      text: "Interfaces Angular et TypeScript branchées sur votre API ou sur un back-end Laravel.",
      points: [
        "Composants réutilisables",
        "Tests unitaires et intégration continue",
        "Attention portée au temps de chargement",
      ],
    },
    {
      title: "Migration",
      text: "Mise à niveau d'une application Angular ancienne vers une version récente.",
      points: [
        "Montée de version par paliers",
        "Refactoring du code existant",
      ],
    },
    {
      title: "Maintenance",
      text: "Corrections et évolutions sur une application Angular en production.",
      points: [
        "Correctifs et mises à jour",
        "Contrat de maintenance annuel possible",
      ],
    },
  ],
  ctaTitle: "Un projet Angular ?",
  ctaText: "Décrivez-moi votre besoin. Je vous réponds avec un devis gratuit.",
  ctaLabel: "Demander un devis",
};

function DeveloppeurAngularFreelance() {
  return (
    <>
      <Helmet>
        <title>Développeur Angular Freelance | Abderrahmane El Farouah</title>
        <meta name="description" content="Développeur Angular freelance à Mantes-la-Jolie et Île-de-France. Services de développement d'applications web Angular sur mesure pour entreprises et startups." />
        <meta name="keywords" content="développeur Angular freelance, Angular freelance, développeur web Angular, expert Angular Mantes-la-Jolie, développement application Angular, freelance Angular Île-de-France" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Développeur Angular Freelance | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développeur Angular freelance à Mantes-la-Jolie. Développement d'applications web Angular sur mesure pour entreprises." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/developpeur-angular-freelance" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développeur Angular Freelance | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développeur Angular freelance à Mantes-la-Jolie. Services Angular sur mesure." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <LandingPage {...page} />
    </>
  );
}

export const Route = createFileRoute('/developpeur-angular-freelance')({
  component: DeveloppeurAngularFreelance,
})
