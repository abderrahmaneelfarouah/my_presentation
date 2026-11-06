import { ArrowRight } from 'lucide-react';

const principles = [
  {
    title: 'Un seul interlocuteur',
    desc: "Vous parlez à la personne qui écrit le code, de la première discussion à la mise en ligne.",
  },
  {
    title: 'Pensé pour votre activité',
    desc: "Je pars de votre besoin et de vos façons de travailler, pas d'un thème tout fait.",
  },
  {
    title: 'Rapide et trouvable',
    desc: "Vitesse de chargement et référencement technique sont traités dès le départ, pas ajoutés à la fin.",
  },
  {
    title: 'Un code que l’on peut reprendre',
    desc: "Code structuré et versionné sur Git, pour qu'un autre développeur puisse prendre le relais.",
  },
];

const services = [
  {
    title: 'Création de sites web',
    desc: "Sites vitrines adaptés au mobile, écrits pour être trouvés sur Google.",
  },
  {
    title: 'Applications web',
    desc: "Outils internes qui remplacent les tableurs et les tâches manuelles : suivi clients, stocks, devis, facturation.",
  },
  {
    title: 'Refonte et optimisation',
    desc: "Votre site est lent ou daté : j'audite l'existant, je corrige ce qui le ralentit et je modernise le reste.",
  },
  {
    title: 'SEO et performance',
    desc: "Audit technique, données structurées, vitesse de chargement et référencement local.",
  },
  {
    title: 'Maintenance et évolution',
    desc: "Mises à jour de sécurité, corrections et nouvelles fonctionnalités après la mise en ligne.",
  },
  {
    title: 'E-commerce',
    desc: "Boutique en ligne avec paiement sécurisé, gestion des stocks et suivi des commandes.",
  },
];

const steps = [
  {
    title: 'Cadrage',
    desc: "On définit ce dont vous avez besoin, ce qui est prioritaire et ce que cela coûte.",
  },
  {
    title: 'Conception',
    desc: "Choix techniques et maquettes des écrans, validés avec vous avant d'écrire le code.",
  },
  {
    title: 'Développement',
    desc: "Livraisons par petites étapes : vous testez au fur et à mesure et on corrige tôt.",
  },
  {
    title: 'Recette',
    desc: "Tests, corrections et validation finale avec vous.",
  },
  {
    title: 'Mise en ligne',
    desc: "Déploiement, prise en main, puis maintenance si vous en avez besoin.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen selection-accent">
      <section id="hero" className="section-premium min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight text-text-main">
            Développeur Angular et Laravel, freelance dans les Yvelines
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-text-secondary leading-relaxed font-light">
            Je crée des sites, des boutiques en ligne et des outils de gestion sur mesure pour les petites
            entreprises, les indépendants et les startups. Basé à Mantes-la-Jolie, je travaille surtout à distance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="btn-premium inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-medium rounded-lg focus-ring"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="/services"
              className="btn btn-secondary px-10 py-4 text-base font-medium inline-flex items-center justify-center gap-2"
            >
              Voir mes services
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="why" className="section-premium py-24 px-4" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold mb-12 text-text-main text-center">
            Comment je travaille
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="services" className="section-premium py-24 px-4" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-12 text-text-main text-center">
            Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card-bento">
                <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="btn btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-2"
            >
              Tous les services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="methode" className="section-premium py-24 px-4" aria-labelledby="methode-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="methode-heading" className="text-3xl md:text-4xl font-bold mb-12 text-text-main text-center">
            Déroulement d'un projet
          </h2>

          <ol className="space-y-8 list-none p-0 m-0">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <span className="text-3xl font-bold text-accent w-8 shrink-0 leading-none" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-text-main mb-1">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="realisations" className="section-premium py-24 px-4" aria-labelledby="realisations-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="realisations-heading" className="text-3xl md:text-4xl font-bold mb-6 text-text-main">
            Projets personnels
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Quatre projets publics : trois jeux et un Pokédex. Chacun a une démo en ligne et son code sur GitHub.
            Ce ne sont pas des missions clients.
          </p>
          <a
            href="/projects"
            className="btn btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-2"
          >
            Voir les projets
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="about" className="section-premium py-24 px-4" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-text-main">
            À propos
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Développeur web freelance à Mantes-la-Jolie. Je travaille avec Angular, Laravel et TypeScript.
            Mon parcours est détaillé sur la page dédiée.
          </p>
          <a
            href="/about"
            className="btn btn-secondary px-8 py-4 text-base font-medium inline-flex items-center gap-2"
          >
            Mon parcours
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      <section id="cta" className="py-28 px-4" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto">
          <div className="card-bento p-10 md:p-14 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6 text-text-main tracking-tight leading-tight">
              Un site à créer ou une application à reprendre ?
            </h2>
            <p className="text-xl mb-10 text-text-secondary max-w-xl mx-auto leading-relaxed">
              Décrivez-moi votre projet. Le premier échange est gratuit et sans engagement.
            </p>

            <a
              href="/contact"
              className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-lg focus-ring"
            >
              Me contacter
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </a>

            <p className="mt-8 text-text-secondary text-sm">
              Réponse sous 24 h · Île-de-France et à distance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
