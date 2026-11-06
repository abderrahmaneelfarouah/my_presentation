import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import LandingPage from '../components/shared/LandingPage';

const page = {
  title: "Développeur Laravel freelance",
  intro: "Back-end Laravel pour des applications web et des API : authentification, base de données, intégration avec vos outils. Je suis à Mantes-la-Jolie et je travaille 100 % à distance, partout en France.",
  cards: [
    {
      title: "Applications web",
      text: "Applications complètes avec Laravel et une base MySQL ou PostgreSQL, associées à une interface Angular ou React.",
      points: [
        "Architecture MVC",
        "Authentification et gestion des rôles",
        "Migrations et modélisation de la base de données",
      ],
    },
    {
      title: "API et intégrations",
      text: "API REST consommée par votre interface, ou connectée à vos outils existants.",
      points: [
        "Documentation de l'API",
        "Tests automatisés",
        "Déploiement avec Docker et CI/CD",
      ],
    },
    {
      title: "Maintenance",
      text: "Reprise et maintenance d'une application Laravel existante.",
      points: [
        "Mises à jour de Laravel et de PHP",
        "Correction de bugs",
        "Optimisation des requêtes lentes",
      ],
    },
  ],
  ctaTitle: "Un projet Laravel ?",
  ctaText: "Décrivez-moi votre besoin. Je vous réponds avec un devis gratuit.",
  ctaLabel: "Demander un devis",
};

function DeveloppeurLaravelFreelance() {
  return (
    <>
      <Helmet>
        <title>Développeur Laravel Freelance | Abderrahmane El Farouah</title>
        <meta name="description" content="Développeur Laravel freelance à Mantes-la-Jolie et Île-de-France. Services de développement backend Laravel, APIs et sites sur mesure." />
        <meta name="keywords" content="développeur Laravel freelance, Laravel freelance, développeur backend Laravel, expert Laravel Mantes-la-Jolie, développement API Laravel, freelance Laravel Île-de-France" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Développeur Laravel Freelance | Abderrahmane El Farouah" />
        <meta property="og:description" content="Développeur Laravel freelance à Mantes-la-Jolie. Développement backend Laravel, APIs et sites sur mesure." />
        <meta property="og:url" content="https://www.abderrahmane-elfarouahfreelance.com/developpeur-laravel-freelance" />
        <meta property="og:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développeur Laravel Freelance | Abderrahmane El Farouah" />
        <meta name="twitter:description" content="Développeur Laravel freelance à Mantes-la-Jolie. Services backend Laravel." />
        <meta name="twitter:image" content="https://www.abderrahmane-elfarouahfreelance.com/og-image.png" />
      </Helmet>

      <LandingPage {...page} />
    </>
  );
}

export const Route = createFileRoute('/developpeur-laravel-freelance')({
  component: DeveloppeurLaravelFreelance,
})
