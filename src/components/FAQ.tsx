import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quel est le tarif d'un développeur Angular freelance ?",
    answer:
      "Cela dépend du projet. Pour du développement front-end Angular, je facture entre 400 et 600 € par jour ; pour une mission fullstack Angular et Laravel, entre 500 et 700 €. Chaque devis est établi après un premier échange.",
  },
  {
    question: "Combien de temps faut-il pour créer une application web ?",
    answer:
      "Un site vitrine prend de 3 à 5 jours. Une application métier Angular et Laravel demande en général 1 à 3 mois, et une plateforme SaaS complète 3 à 6 mois. Je livre par petites étapes pour que vous puissiez suivre l'avancement et corriger tôt.",
  },
  {
    question: "Pourquoi choisir Angular pour une application web ?",
    answer:
      "Angular convient bien aux applications métier : beaucoup d'écrans, des formulaires complexes, une équipe qui évolue. Il impose une structure, ce qui aide à maintenir le code sur la durée. Pour un site simple, il est en revanche souvent trop lourd.",
  },
  {
    question: "Intervenez-vous uniquement à Mantes-la-Jolie ou partout en France ?",
    answer:
      "Je suis basé à Mantes-la-Jolie (78) et je travaille 100 % à distance, pour des clients partout en France, par visioconférence.",
  },
  {
    question: "Quelle est la différence entre Angular et React ?",
    answer:
      "Angular est un framework complet et très structuré, adapté aux applications métier complexes. React est une bibliothèque plus légère et plus libre, adaptée aux interfaces plus simples ou aux équipes qui veulent choisir leurs propres outils. Je conseille Angular quand la maintenabilité à long terme compte le plus.",
  },
  {
    question: "Proposez-vous la maintenance après la livraison ?",
    answer:
      "Oui, en option : correction de bugs, mises à jour de sécurité Angular et Laravel, amélioration des performances et nouvelles fonctionnalités.",
  },
  {
    question: "Comment se déroule un projet ?",
    answer:
      "En cinq étapes : 1) cadrage (besoins, priorités, budget), 2) conception (choix techniques et maquettes), 3) développement par étapes avec livraisons régulières, 4) recette (tests et validation avec vous), 5) mise en ligne et prise en main.",
  },
  {
    question: "Laravel ou Node.js : quel back-end choisir avec Angular ?",
    answer:
      "Laravel (PHP) convient bien aux applications de gestion : données complexes, authentification, espace d'administration. Node.js est pertinent pour le temps réel (chat, notifications) et les microservices. Je travaille avec les deux et je vous conseille selon votre projet.",
  },
];

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="glass rounded-design overflow-hidden mb-4"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <h3
          className="text-lg font-display font-semibold text-text-main pr-4"
          itemProp="name"
        >
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-accent flex-shrink-0" size={24} aria-hidden="true" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div
          className="p-6 pt-0 text-text-secondary font-body leading-relaxed"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div itemProp="text">
            {item.answer}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </script>

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-main mb-4">
          FAQ Développeur Web <span className="text-accent">Angular & Laravel</span>
        </h1>
        <p className="text-text-secondary font-body max-w-2xl mx-auto">
          Les questions qu'on me pose le plus souvent : tarifs, délais, déroulement d'un projet.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <FAQItemComponent key={item.question} item={item} />
        ))}
      </div>

      <div className="mt-12 p-8 glass rounded-design text-center">
        <h2 className="text-xl font-display font-semibold text-text-main mb-2">
          Une autre question ?
        </h2>
        <p className="text-text-secondary font-body mb-4">
          Écrivez-moi, je réponds sous 24 h.
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
