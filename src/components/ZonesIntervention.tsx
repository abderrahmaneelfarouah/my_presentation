const villes = [
  'Mantes-la-Jolie',
  'Mantes-la-Ville',
  'Versailles',
  'Saint-Germain-en-Laye',
  'Le Vésinet',
  'Chatou',
  'Rueil-Malmaison',
  'Paris',
];

const modesCollaboration = [
  {
    title: 'À distance',
    description:
      "Les projets se déroulent 100 % à distance. Les échanges passent par Teams, Zoom ou Google Meet, avec partage d'écran et démonstrations.",
  },
  {
    title: 'Partout en France',
    description:
      "Pas de limite géographique : je travaille avec des clients à Paris, en Île-de-France comme dans toutes les régions.",
  },
  {
    title: 'Pas de bureau ouvert au public',
    description:
      "Je travaille depuis Mantes-la-Jolie, mais je n'ai pas de bureau ouvert au public.",
  },
];

export default function ZonesIntervention() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-main mb-4">
          Développeur web freelance à <span className="text-accent">Mantes-la-Jolie</span>, disponible partout en
          France en full remote
        </h1>
        <p className="text-text-secondary font-body max-w-3xl mx-auto">
          Je suis développeur Angular et Laravel, basé à Mantes-la-Jolie (78). Je travaille 100 % à distance, pour
          des entreprises de toute la France, par visioconférence.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-display font-semibold text-text-main mb-6">
          Comment on travaille ensemble
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modesCollaboration.map((mode) => (
            <div key={mode.title} className="glass rounded-design p-6">
              <h3 className="font-display font-semibold text-text-main mb-2">{mode.title}</h3>
              <p className="text-sm text-text-secondary font-body">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-display font-semibold text-text-main mb-4">
          Zone couverte
        </h2>
        <p className="text-text-secondary font-body">
          Toute la France, en full remote : en Île-de-France ({villes.join(', ')}) comme dans les autres régions.
          Votre ville n'a pas besoin de figurer dans cette liste.
        </p>
      </div>

      <div className="glass rounded-design p-8 text-center">
        <h2 className="text-xl font-display font-semibold text-text-main mb-2">
          Un projet à discuter ?
        </h2>
        <p className="text-text-secondary font-body mb-4">
          Le premier échange est gratuit et sans engagement.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-design font-medium hover:bg-accent-hover transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
