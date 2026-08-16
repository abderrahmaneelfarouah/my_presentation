import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';
import { ArrowRight } from 'lucide-react';

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

          {/* QUI JE SUIS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Qui je suis</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4" itemProp="description">
              Développeur web freelance basé en Île-de-France, je crée des solutions digitales performantes pour les entreprises et indépendants. Mon approche combine expertise technique et compréhension des besoins métiers pour livrer des sites web et applications qui génèrent des résultats concrets.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Fort de plusieurs années d'expérience dans le développement web, j'accompagne mes clients dans leur transformation digitale avec une vision orientée résultats : visibilité accrue, processus optimisés, et croissance durable.
            </p>
          </div>

          <meta itemProp="jobTitle" content="Développeur Web Freelance" />
          <meta itemProp="url" content="https://www.abderrahmane-elfarouahfreelance.com" />

          {/* CE QUE JE FAIS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Ce que je fais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-text-main mb-3">Création de sites web</h3>
                <p className="text-text-secondary">Sites vitrines modernes, e-commerce, plateformes sur mesure adaptées à votre activité et vos objectifs.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-text-main mb-3">Applications web</h3>
                <p className="text-text-secondary">Outils métier personnalisés pour automatiser vos processus et améliorer votre efficacité opérationnelle.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-text-main mb-3">Refonte & optimisation</h3>
                <p className="text-text-secondary">Modernisation de sites existants, optimisation des performances et amélioration de l'expérience utilisateur.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-text-main mb-3">SEO & performance</h3>
                <p className="text-text-secondary">Optimisation technique pour améliorer votre visibilité dans les moteurs de recherche et la vitesse de chargement.</p>
              </div>
            </div>
          </div>

          {/* POUR QUI */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Pour qui je travaille</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              J'interviens principalement auprès des entreprises et indépendants en Île-de-France, mais je travaille également à distance avec des clients partout en France.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="card-bento">
                <p className="font-semibold text-text-main">PME</p>
              </div>
              <div className="card-bento">
                <p className="font-semibold text-text-main">Startups</p>
              </div>
              <div className="card-bento">
                <p className="font-semibold text-text-main">Indépendants</p>
              </div>
              <div className="card-bento">
                <p className="font-semibold text-text-main">E-commerçants</p>
              </div>
            </div>
          </div>

          {/* MON APPROCHE */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-main mb-6 tracking-tight">Mon approche</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-bento">
                <h3 className="font-semibold text-text-main mb-2">Écoute & compréhension</h3>
                <p className="text-sm text-text-secondary">Je prends le temps de comprendre votre activité, vos objectifs et vos contraintes avant toute proposition technique.</p>
              </div>
              <div className="card-bento">
                <h3 className="font-semibold text-text-main mb-2">Solutions sur mesure</h3>
                <p className="text-sm text-text-secondary">Chaque projet est unique : je conçois des solutions adaptées à vos besoins spécifiques, pas des templates génériques.</p>
              </div>
              <div className="card-bento">
                <h3 className="font-semibold text-text-main mb-2">Accompagnement complet</h3>
                <p className="text-sm text-text-secondary">De la conception à la livraison, je vous accompagne à chaque étape et vous forme pour être autonome.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="/contact"
              className="btn-premium inline-flex items-center gap-3 px-10 py-4 text-base font-medium rounded-lg"
            >
              Discutons de votre projet
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

        </div>

      </Container>
    </section>
  );
}
