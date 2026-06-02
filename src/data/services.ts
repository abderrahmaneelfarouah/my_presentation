import { Code, Database, Globe, MapPin, type LucideIcon } from 'lucide-react';

export const SERVICES_HEADING = {
  prefix: 'Mes',
  highlight: 'Services',
  subtitle: 'Des solutions sur mesure pour votre transformation digitale',
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
  gradient: string;
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'outils-metier',
    title: 'Outils Métiers sur Mesure',
    description:
      'Applications web personnalisées pour automatiser vos tâches et gagner du temps au quotidien',
    icon: Code,
    gradient: 'from-accent/25 to-primary/15',
  },
  {
    id: 'gestion-stock',
    title: 'Gestion & Stock',
    description:
      'Systèmes de gestion clients, stocks, devis et facturation adaptés à votre activité',
    icon: Database,
    gradient: 'from-accent/25 to-primary/15',
  },
  {
    id: 'site-boutique',
    title: 'Site Web & Boutique',
    description:
      'Site vitrine professionnel ou boutique en ligne pour vendre sur internet 24h/24',
    icon: Globe,
    gradient: 'from-accent/25 to-primary/15',
  },
  {
    id: 'referencement-local',
    title: 'Référencement Local',
    description:
      'Apparaître sur Google dans votre région et attirer plus de clients près de chez vous',
    icon: MapPin,
    gradient: 'from-accent/25 to-primary/15',
  },
];
