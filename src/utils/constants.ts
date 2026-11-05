export const CONTACT = {
  PHONE_DISPLAY: '07 60 75 13 50',
  PHONE_TEL: '+33760751350',
  EMAIL: 'abde.elfarouah@gmail.com',
  WHATSAPP: 'https://wa.me/33760751350',
} as const;

// Public profiles use the shared ABDEDEVLAB handle requested for the brand.
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/abderrahmaneelfarouah/',
  LINKEDIN: 'https://www.linkedin.com/in/ABDEDEVLAB/',
  TWITTER: 'https://x.com/ABDEDEVLAB',
  YOUTUBE: 'https://www.youtube.com/@ABDEDEVLAB',
  TIKTOK: 'https://www.tiktok.com/@ABDEDEVLAB',
  EMAIL: CONTACT.EMAIL,
} as const;

export const NAV_ITEMS = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
];
