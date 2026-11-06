import { Code, Database, Globe, MapPin, type LucideIcon } from 'lucide-react';

export const SERVICES_HEADING = {
  prefix: 'Mes',
  highlight: 'Services',
  subtitle: 'Ce sur quoi je peux intervenir',
} as const;

export const SERVICE_TECHNOLOGIES = [
  'Angular',
  'Laravel',
  'TypeScript',
  'PHP',
  'SEO',
  'Accessibilité',
  'Performance',
] as const;

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'outils-metier',
    title: 'Outils métier sur mesure',
    description:
      'Une application web qui remplace vos tableurs et vos tâches manuelles.',
    icon: Code,
  },
  {
    id: 'gestion-stock',
    title: 'Gestion et stock',
    description:
      'Suivi des clients, des stocks, des devis et de la facturation, adapté à votre façon de travailler.',
    icon: Database,
  },
  {
    id: 'site-boutique',
    title: 'Site web et boutique',
    description:
      'Un site vitrine ou une boutique en ligne avec paiement sécurisé.',
    icon: Globe,
  },
  {
    id: 'referencement-local',
    title: 'Référencement local',
    description:
      'Être visible sur Google dans votre zone géographique.',
    icon: MapPin,
  },
];
