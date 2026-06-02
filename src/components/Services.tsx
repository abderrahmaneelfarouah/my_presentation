import ServicesOverview from './services/ServicesOverview';

/** Page dédiée — le détail des services n’apparaît qu’ici (pas en doublon sur l’accueil). */
export default function Services() {
  return (
    <ServicesOverview
      headingAs="h1"
      badgeLabel="Transformation digitale"
      showCta
      className="section-premium py-16 md:py-24 px-4 min-h-[70vh]"
    />
  );
}
