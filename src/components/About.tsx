import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';
import { ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'Sites web et boutiques',
    text: 'Sites vitrines et boutiques en ligne, pensés pour votre activité.',
  },
  {
    title: 'Applications web',
    text: 'Outils de gestion qui remplacent les tableurs et les tâches manuelles.',
  },
  {
    title: 'Refonte et optimisation',
    text: 'Site existant à moderniser, à accélérer ou à corriger.',
  },
  {
    title: 'SEO et performance',
    text: 'Vitesse de chargement, balisage et référencement local.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Container>
        <SectionTitle>
          À propos de <span className="text-accent" itemProp="name">Abderrahmane El Farouah</span>
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Qui je suis</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4" itemProp="description">
              Développeur web freelance à Mantes-la-Jolie. Je travaille avec Angular, Laravel et TypeScript, et je
              construis des sites et des outils de gestion pour des petites entreprises, des indépendants et des
              startups.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Mon parcours est sur la page Expérience, et le code de mes projets personnels est public sur GitHub.
            </p>
          </div>

          <meta itemProp="jobTitle" content="Développeur Web Freelance" />
          <meta itemProp="url" content="https://www.abderrahmane-elfarouahfreelance.com" />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Ce que je fais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offers.map((offer) => (
                <div key={offer.title} className="card">
                  <h3 className="text-lg font-semibold text-text-main mb-3">{offer.title}</h3>
                  <p className="text-text-secondary">{offer.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Pour qui</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Des PME, des startups, des indépendants et des e-commerçants. Je travaille 100 % à distance, avec des
              clients partout en France.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Ma façon de travailler</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Je commence par comprendre votre activité et vos contraintes, avant toute proposition technique. Je
              conçois ensuite une solution adaptée plutôt qu'un modèle générique, et je vous explique comment
              l'utiliser une fois livrée.
            </p>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="btn-premium inline-flex items-center gap-3 px-10 py-4 text-base font-medium rounded-lg"
            >
              Me contacter
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
