import { useEffect } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Container from '../components/shared/Container';

interface ArticleSubsection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface ArticleSection extends ArticleSubsection {
  subsections?: ArticleSubsection[];
}

interface ArticleFAQ {
  question: string;
  answer: string;
}

interface BlogArticleData {
  title: string;
  excerpt: string;
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
  date: string;
  category: string;
  author: string;
  faq?: ArticleFAQ[];
}

const articlesData: Record<string, BlogArticleData> = {
  'pourquoi-angular-application-metier': {
    title: 'Pourquoi choisir Angular pour une application métier ?',
    excerpt: 'Les critères qui rendent Angular adapté à certaines applications métier, ses limites et un exemple d’architecture avec une API Laravel.',
    intro:
      "Lorsqu’une équipe gère ses dossiers entre tableurs, emails et outils séparés, les informations se dupliquent et les étapes de validation deviennent difficiles à suivre. Une application métier peut réunir ces parcours, mais elle doit rester compréhensible et maintenable à mesure que les règles évoluent. Angular peut convenir lorsque l’interface comporte de nombreux écrans, formulaires, rôles et interactions. Ce n’est pas un choix automatique : le périmètre, l’équipe et la durée de vie prévue comptent davantage que la popularité d’un framework.",
    date: '2026-04-15',
    category: 'Angular',
    author: 'Abderrahmane El Farouah',
    sections: [
      {
        heading: 'Qu’est-ce qu’une application métier ?',
        paragraphs: [
          "Une application métier est un logiciel conçu autour des activités d’une organisation : suivi de commandes, gestion de dossiers, planification d’interventions, traitement de demandes ou consultation d’indicateurs. Elle sert généralement des utilisateurs identifiés et applique des règles qui dépendent du rôle de la personne, de l’état d’un dossier ou d’une étape de validation.",
          "Sa valeur vient souvent des actions qu’elle permet d’effectuer et des données qu’elle présente. Il faut concevoir les parcours, les permissions, les erreurs et les échanges avec les systèmes existants, pas seulement dessiner des écrans.",
        ],
      },
      {
        heading: 'Pourquoi Angular est adapté à certains projets métier',
        subsections: [
          {
            heading: 'Architecture structurée',
            paragraphs: [
              "Angular fournit des conventions et des mécanismes intégrés pour organiser les composants, les services, l’injection de dépendances et la navigation. L’équipe peut séparer l’interface, l’accès aux données et les règles d’affichage au lieu de concentrer toute la logique dans un seul composant.",
              "Cette structure aide lorsque plusieurs personnes travaillent sur le produit ou qu’il doit évoluer sur plusieurs années. Elle ne garantit pas la qualité à elle seule : des responsabilités claires, des tests et des revues de code restent nécessaires.",
            ],
          },
          {
            heading: 'Formulaires complexes',
            paragraphs: [
              "Les formulaires réactifs permettent de décrire les champs, leurs validateurs et leurs relations dans le code. C’est utile pour des parcours en plusieurs étapes, des champs conditionnels ou des règles qui dépendent d’autres valeurs.",
              "La validation dans le navigateur améliore le confort, mais ne remplace pas celle de l’API. Le serveur doit vérifier à nouveau chaque donnée reçue, y compris lorsqu’un utilisateur contourne l’interface.",
            ],
          },
          {
            heading: 'Gestion des composants',
            paragraphs: [
              "Les composants construisent l’interface en éléments réutilisables : champ de formulaire, tableau paginé, fenêtre de confirmation ou résumé d’un dossier. Des composants bien délimités facilitent les tests et évitent de dupliquer les mêmes règles visuelles.",
              "La réutilisation doit rester justifiée. Un composant trop générique, rempli de paramètres et de cas particuliers, peut être plus difficile à comprendre que deux composants simples.",
            ],
          },
          {
            heading: 'Routage',
            paragraphs: [
              "Le routeur associe des URL à des vues et prend en charge les paramètres, les routes enfants et le chargement différé. Une structure cohérente aide à retrouver une section et à séparer, par exemple, les espaces de gestion et de consultation.",
              "Une garde de route peut rediriger un utilisateur dans l’interface, mais ce n’est pas une barrière de sécurité : chaque endpoint doit appliquer ses propres contrôles côté serveur.",
            ],
          },
          {
            heading: 'Authentification et autorisations',
            paragraphs: [
              "L’authentification établit qui est connecté ; l’autorisation décide quelles actions cette personne peut accomplir. Angular peut adapter les menus et les écrans au contexte utilisateur, mais une règle affichée ou masquée dans le navigateur ne protège pas les données.",
              "Les autorisations doivent être vérifiées par l’API pour chaque opération sensible. Il faut aussi prévoir les sessions expirées, les réponses interdites et la déconnexion afin que l’interface reste cohérente.",
            ],
          },
          {
            heading: 'Communication avec une API',
            paragraphs: [
              "Le client HTTP et des services dédiés permettent de centraliser les appels réseau, leurs types et le traitement commun des erreurs. Les composants peuvent alors se concentrer sur l’affichage et les interactions.",
              "Définir les formats de réponse, les codes d’erreur et les règles de pagination avec l’équipe backend réduit les divergences. TypeScript documente les données attendues côté client, mais ne garantit pas que la réponse distante respecte ces types à l’exécution.",
            ],
          },
          {
            heading: 'Maintenance d’une application importante',
            paragraphs: [
              "Une application qui grandit profite d’une séparation compréhensible des fonctionnalités, de tests automatisés et de mises à jour régulières des dépendances. Angular apporte un cadre cohérent, mais la maintenabilité dépend aussi de la qualité des noms, de la documentation et de la discipline de l’équipe.",
              "Faites évoluer l’architecture à partir des besoins observés plutôt que de créer dès le départ une couche d’abstraction pour chaque possibilité hypothétique.",
            ],
          },
        ],
      },
      {
        heading: 'Angular avec Laravel',
        paragraphs: [
          "Dans une architecture séparée, Angular s’exécute dans le navigateur et gère l’interface : navigation, formulaires, affichage des données et retours d’interaction. Laravel expose une API qui applique les règles métier, authentifie les requêtes, vérifie les autorisations et communique avec la base de données. Le navigateur ne se connecte pas directement à cette base.",
          "Les deux applications doivent s’accorder sur un contrat d’API : URL, méthodes HTTP, structure des réponses, validation, pagination et erreurs. Ce contrat peut être décrit avec OpenAPI ou documenté avec des exemples de requêtes et de réponses maintenus avec le code.",
        ],
        bullets: [
          'Angular envoie une requête HTTPS à l’API Laravel et présente un état de chargement, de réussite ou d’erreur.',
          'Laravel vérifie l’identité de la personne et ses droits avant toute opération protégée.',
          'La base reste accessible depuis le backend, qui renvoie au client uniquement les données nécessaires.',
          'Le mécanisme d’authentification (session avec cookies ou jetons) dépend du déploiement et doit être accompagné des protections adaptées, notamment contre les requêtes intersites lorsque nécessaire.',
        ],
      },
      {
        heading: 'Angular n’est pas toujours le meilleur choix',
        paragraphs: [
          "Pour un petit site vitrine, une landing page ou un site dont le contenu éditorial doit être immédiatement accessible dans les résultats de recherche, un générateur statique, un CMS ou un rendu côté serveur peut être plus direct. Angular peut aussi servir à ces usages, mais le coût de configuration et de maintenance doit être justifié par un besoin réel.",
          "Une application très simple, avec peu d’interactions et sans logique d’interface complexe, n’a pas nécessairement besoin d’un framework complet. Une solution légère peut suffire, puis évoluer si les besoins le justifient.",
        ],
        bullets: [
          'Landing page essentiellement statique : privilégier une solution simple à charger et à mettre à jour.',
          'Contenu éditorial fréquent : vérifier les outils de publication et le rendu HTML avant de choisir le frontend.',
          'Prototype à durée de vie courte : limiter l’architecture au besoin à valider.',
          'Équipe déjà expérimentée dans une autre pile : comparer le coût de changement à ses bénéfices concrets.',
        ],
      },
      {
        heading: 'Angular ou React ?',
        paragraphs: [
          "Angular et React peuvent tous deux servir à créer une application métier. Angular est un framework qui fournit une approche intégrée pour le routage, l’injection de dépendances, les formulaires et les requêtes HTTP. React est une bibliothèque d’interface ; l’équipe choisit et assemble généralement des solutions complémentaires pour le routage et les formulaires.",
          "Un ensemble intégré peut faciliter l’alignement des pratiques, tandis qu’une approche par bibliothèques laisse davantage de latitude. En contrepartie, il faut décider quelles bibliothèques utiliser et comment les faire évoluer. Ni l’un ni l’autre ne garantit à lui seul de meilleures performances ou une meilleure qualité.",
          "Comparez le savoir-faire disponible, les conventions que l’équipe souhaite adopter et les outils déjà présents. Une petite preuve de concept peut tester un formulaire complexe et un parcours de données représentatifs.",
        ],
      },
      {
        heading: 'Exemple d’architecture',
        paragraphs: [
          "Prenons un scénario fictif de suivi de demandes, sans prétendre décrire un projet client. Une personne se connecte à l’application Angular, consulte les dossiers auxquels elle a accès, met à jour un statut et ajoute un commentaire. L’interface appelle l’API Laravel ; le backend vérifie les droits, applique les règles de transition et enregistre les changements.",
          "Une séparation possible des responsabilités est la suivante :",
        ],
        bullets: [
          'Angular : pages, composants, formulaires, navigation et affichage des réponses de l’API.',
          'API Laravel : authentification, autorisations, validation, règles métier et journalisation des opérations importantes.',
          'Base de données : dossiers, utilisateurs, rôles et historique, accessibles uniquement par le backend.',
          'Infrastructure : HTTPS, origines autorisées, sauvegardes, supervision et secrets conservés côté serveur.',
        ],
      },
      {
        heading: 'Performance',
        paragraphs: [
          "Angular n’accélère pas automatiquement une application. La taille du JavaScript initial, le nombre de requêtes, les composants trop souvent recalculés et les réponses lentes de l’API peuvent dégrader l’expérience.",
          "Le chargement différé des routes, la pagination des listes volumineuses, la limitation des requêtes répétées et l’optimisation des ressources statiques peuvent aider. Mesurez les écrans représentatifs sur des appareils et réseaux réalistes, puis traitez le principal goulot d’étranglement.",
          "La performance dépend également du backend : requêtes de base de données, index, taille des réponses, cache et traitement des tâches longues. Un tableau fluide côté Angular ne compensera pas une API qui renvoie trop de données.",
        ],
      },
      {
        heading: 'Maintenance et évolutivité',
        paragraphs: [
          "Une application métier évolue avec les procédures de l’organisation. Pour éviter qu’une petite évolution ne devienne risquée, organisez les fonctionnalités, couvrez les règles sensibles par des tests et documentez les contrats entre frontend et backend.",
          "Prévoyez aussi le cycle de vie des données et des dépendances : sauvegardes testées, mises à jour de sécurité, migrations de base de données, suivi des erreurs et procédure de déploiement. Une architecture comprise par l’équipe qui devra intervenir vaut mieux qu’une architecture conçue pour une échelle qui n’existe pas encore.",
        ],
        bullets: [
          'Tester les règles métier et les permissions côté API, ainsi que les parcours d’interface essentiels.',
          'Documenter les changements incompatibles du contrat d’API.',
          'Tester la restauration des sauvegardes plutôt que supposer qu’elles sont utilisables.',
          'Suivre les erreurs et les performances en production en limitant les données personnelles enregistrées.',
        ],
      },
    ],
    conclusion:
      "Angular est pertinent lorsque l’application comporte des parcours riches, des formulaires complexes et une interface appelée à être maintenue par une équipe. Associé à Laravel, il peut former un couple cohérent si le contrat d’API, l’authentification et les autorisations sont définis clairement. Pour un site léger ou surtout éditorial, une solution plus simple peut mieux convenir. Le meilleur choix répond au besoin mesuré tout en restant maintenable par les personnes qui feront évoluer le produit.",
    faq: [
      {
        question: 'Angular convient-il à une application métier avec beaucoup de formulaires ?',
        answer: 'Oui. Ses formulaires réactifs permettent de structurer les validations et les champs dépendants. Les règles importantes doivent toutefois être vérifiées côté API : la validation du navigateur ne protège pas le serveur.',
      },
      {
        question: 'Une garde de route Angular suffit-elle à protéger une page ?',
        answer: 'Non. Une garde contrôle la navigation dans l’interface, mais les autorisations doivent être vérifiées par le backend sur chaque requête qui accède à une ressource ou déclenche une action protégée.',
      },
      {
        question: 'Peut-on utiliser Angular avec une API Laravel ?',
        answer: 'Oui. Angular peut appeler une API Laravel en HTTPS. Le backend conserve la logique métier et l’accès à la base de données ; les deux parties doivent partager un contrat clair pour les données, les erreurs et les règles d’accès.',
      },
      {
        question: 'Angular ou React : lequel choisir pour un outil interne ?',
        answer: 'Aucun n’est systématiquement supérieur. Angular offre un cadre intégré ; React laisse davantage de choix de bibliothèques. Comparez les compétences de l’équipe, les besoins et les coûts de maintenance, idéalement sur un parcours représentatif.',
      },
      {
        question: 'Angular est-il adapté à une landing page ou à un blog ?',
        answer: 'Il peut être utilisé, mais un site statique, un CMS ou un rendu côté serveur peut être plus simple lorsque le contenu est principalement éditorial et qu’il y a peu d’interactions.',
      },
    ],
  },
  'laravel-vs-nodejs-quel-choisir': {
    title: 'Laravel ou Node.js : choisir une solution backend en 2026',
    excerpt: 'Laravel et Node.js répondent à des besoins différents : comparez les usages, les compétences disponibles et les contraintes de maintenance.',
    intro:
      "La comparaison mérite une précision : Laravel est un framework PHP, tandis que Node.js est un environnement d’exécution JavaScript autour duquel on choisit un framework, par exemple Express ou NestJS. Le bon choix ne se résume donc pas à opposer deux produits équivalents ; il dépend de l’application, de l’équipe et de l’exploitation prévue.",
    date: '2026-04-22',
    category: 'Backend',
    author: 'Abderrahmane El Farouah',
    sections: [
      {
        heading: 'Laravel pour aller vite sur du métier',
        paragraphs: [
          "Laravel est très efficace pour les applications de gestion, extranets, back-offices, CRM légers, API classiques et plateformes avec beaucoup de règles métier.",
          "Son écosystème donne vite accès à l’authentification, aux migrations, aux jobs, aux emails, aux validations et à une structure connue par beaucoup de développeurs PHP.",
        ],
      },
      {
        heading: 'Node.js pour les usages temps réel et JavaScript partout',
        paragraphs: [
          "Node.js est très pertinent quand le projet repose sur du temps réel, des WebSockets, des microservices, du streaming ou une équipe déjà très orientée JavaScript/TypeScript.",
          "Il permet aussi de partager plus facilement certaines logiques entre front et back, à condition de garder une architecture propre.",
        ],
      },
      {
        heading: 'Ma règle simple',
        bullets: [
          'Projet métier classique avec beaucoup de CRUD et de règles : Laravel est souvent plus direct.',
          'Application temps réel, flux continus ou équipe full TypeScript : Node.js prend l’avantage.',
          'Projet long terme : le choix doit aussi tenir compte des compétences disponibles pour la maintenance.',
        ],
      },
      {
        heading: 'Comparer sur un même périmètre',
        paragraphs: [
          "Pour comparer sérieusement deux approches, décrivez le même petit périmètre dans les deux : connexion, un rôle utilisateur, une ressource avec validation, une recherche paginée, un email et un test automatisé. Mesurez le temps nécessaire, la quantité de code spécifique, les dépendances et la facilité à faire évoluer les règles.",
          "Un test de charge isolé ne prédit pas à lui seul les performances en production. Le réseau, la base de données, la configuration, la concurrence réelle et le cache comptent aussi. Commencez par mesurer un parcours représentatif et identifiez le goulot d’étranglement avant de choisir une architecture plus complexe.",
        ],
      },
      {
        heading: 'Vérifications à inclure dans le prototype',
        bullets: [
          'Écrire et relire une règle métier qui comporte plusieurs conditions.',
          'Vérifier la validation des entrées, l’autorisation par rôle et la gestion des erreurs.',
          'Documenter les versions supportées et les étapes de mise à jour des dépendances.',
          'Faire exécuter les tests et le déploiement par une autre personne que l’auteur du prototype.',
        ],
      },
      {
        heading: 'Les coûts à examiner au-delà du développement',
        paragraphs: [
          "Le budget de réalisation n’est qu’une partie du coût total. Il faut aussi prévoir l’hébergement, les services externes, les sauvegardes, la supervision, les mises à jour de sécurité et le temps nécessaire pour traiter les incidents.",
          "Les deux options peuvent nécessiter un serveur, une base de données et un pipeline de déploiement ; aucune n’est automatiquement moins chère à exploiter. Faites la liste des composants réellement requis et estimez leur coût à partir de volumes plausibles pour le projet.",
        ],
        bullets: [
          'Identifier les dépendances externes indispensables et leurs limites de service.',
          'Définir qui met à jour le runtime, le framework et les bibliothèques.',
          'Prévoir un environnement de test et une procédure de retour arrière après déploiement.',
        ],
      },
      {
        heading: 'Une décision à documenter',
        paragraphs: [
          "Notez les hypothèses qui motivent le choix : compétences disponibles, types de traitements, intégrations, exigences de disponibilité et horizon de maintenance. Si ces hypothèses changent, cette trace permet de réévaluer la décision sans repartir d’un débat de préférence personnelle.",
          "La qualité de l’implémentation, des tests, de la configuration et de l’exploitation influencera souvent davantage la fiabilité du service que le seul choix entre PHP et JavaScript côté serveur.",
        ],
      },
    ],
    conclusion:
      "Laravel et Node.js sont deux bases possibles, mais ne se comparent pas exactement au même niveau : l’un est un framework PHP, l’autre un runtime qui s’utilise avec un framework. Comparez un périmètre identique, les compétences de l’équipe, les dépendances et les coûts d’exploitation. Choisissez l’approche que votre équipe saura livrer, sécuriser et maintenir pour ce produit.",
    faq: [
      {
        question: 'Laravel et Node.js sont-ils directement comparables ?',
        answer: 'Pas exactement. Laravel est un framework PHP complet ; Node.js est un environnement d’exécution JavaScript généralement utilisé avec un framework comme Express ou NestJS. Comparez plutôt des solutions concrètes qui couvrent le même périmètre.',
      },
      {
        question: 'Quel choix convient à une API pour une application de gestion ?',
        answer: 'Les deux peuvent convenir. Évaluez les règles métier, les intégrations, les compétences de l’équipe, les contraintes d’hébergement et la maintenance attendue, puis testez un parcours représentatif.',
      },
      {
        question: 'Node.js est-il toujours meilleur pour le temps réel ?',
        answer: 'Node.js dispose d’outils adaptés aux connexions asynchrones et au temps réel, mais le résultat dépend de l’architecture, de l’infrastructure et de la charge. Il faut mesurer les besoins concrets plutôt que déduire les performances du runtime seul.',
      },
      {
        question: 'Peut-on partager le même code entre le frontend et Node.js ?',
        answer: 'Certaines définitions ou règles sans dépendance à l’environnement peuvent être partagées en TypeScript. L’interface et le serveur ont toutefois des responsabilités et des contraintes de sécurité différentes ; les validations critiques doivent rester côté serveur.',
      },
      {
        question: 'Comment comparer les performances des deux approches ?',
        answer: 'Implémentez le même scénario, avec la même base de données, les mêmes règles et une charge représentative. Mesurez les temps de réponse, les ressources utilisées et les goulots d’étranglement ; un microbenchmark isolé ne prédit pas la performance d’une application complète.',
      },
    ],
  },
  'combien-coute-developpeur-freelance': {
    title: 'Combien coûte un développeur freelance à Mantes-la-Jolie ?',
    excerpt: 'Des repères simples pour comprendre les tarifs d’un projet web freelance dans les Yvelines et en Île-de-France.',
    intro:
      "Le prix d’un projet web dépend rarement d’une seule page ou d’un nombre d’heures théorique. Ce qui fait varier le budget, ce sont les fonctionnalités, les intégrations, le niveau de finition attendu et l’accompagnement après livraison.",
    date: '2026-03-28',
    category: 'Tarifs',
    author: 'Abderrahmane El Farouah',
    sections: [
      {
        heading: 'Pourquoi un prix universel serait trompeur',
        paragraphs: [
          "Je ne publie pas de fourchette chiffrée présentée comme un tarif de marché : sans source datée et périmètre comparable, elle pourrait induire en erreur. Le budget dépend du besoin précis, du contenu disponible, des fonctions attendues et des responsabilités après livraison.",
          "Pour obtenir un repère exploitable, demandez un devis qui distingue les livrables, les hypothèses, les exclusions, les frais récurrents et le montant HT ou TTC. Une estimation ne devient pertinente qu’après clarification de ces éléments.",
        ],
        bullets: [
          'Un site vitrine varie notamment selon le nombre de pages, la rédaction, les langues et les besoins d’accessibilité.',
          'Une application métier dépend des rôles, des règles de gestion, des données et des systèmes à connecter.',
          'Une boutique en ligne doit préciser le catalogue, le paiement, la livraison, le stock et les outils tiers.',
        ],
      },
      {
        heading: 'Ce qui fait monter ou baisser le prix',
        paragraphs: [
          "Un formulaire de contact n’a pas le même impact qu’un espace client, une connexion API, un tableau de bord ou un système de paiement. Le design sur mesure, les contenus à produire et les délais courts jouent aussi beaucoup.",
          "Un devis sérieux doit donc expliquer le périmètre, les livrables, les limites et le niveau de support inclus.",
        ],
      },
      {
        heading: 'Comparer deux devis sans comparer seulement le total',
        paragraphs: [
          "Demandez que les éléments inclus soient distingués : ateliers de cadrage, maquettes, intégration du contenu, développement, recette, mise en ligne et accompagnement après livraison. Vérifiez aussi si le nom de domaine, l’hébergement, les licences et la maintenance sont compris ou facturés séparément.",
          "Un prix fixe n’est comparable à un autre que si le périmètre l’est également. Faites préciser les hypothèses, le nombre d’allers-retours prévu, les livrables attendus, le traitement des demandes supplémentaires et le montant HT ou TTC. Les montants publiés ailleurs ne constituent pas un devis pour votre projet.",
        ],
      },
      {
        heading: 'Préparer une demande de devis utile',
        bullets: [
          'Décrivez les utilisateurs concernés et les tâches qu’ils doivent accomplir.',
          'Listez les pages ou fonctionnalités indispensables au lancement, puis celles qui peuvent attendre.',
          'Signalez les outils à connecter, les données à importer et les contraintes déjà connues.',
          'Indiquez une échéance souhaitée et les personnes disponibles pour valider le travail.',
          'Demandez comment seront gérés les changements de périmètre et la maintenance.',
        ],
      },
      {
        heading: 'Choisir un prestataire local : les critères à vérifier',
        paragraphs: [
          "La proximité peut faciliter des rencontres, mais elle ne garantit ni la qualité ni la disponibilité d’un prestataire. Vérifiez plutôt les exemples de travail, la méthode de cadrage, les modalités de communication et le suivi après la mise en ligne.",
          "Pour une entreprise de Mantes-la-Jolie ou des Yvelines, précisez si les échanges se feront à distance ou sur place, qui participera aux décisions et comment seront validés les livrables.",
        ],
      },
      {
        heading: 'Repère trouvé en ligne ou devis : quelle différence ?',
        paragraphs: [
          "Une estimation trouvée en ligne peut aider à préparer des questions, mais elle ne tient pas compte de votre contenu, de vos contraintes, des intégrations ou des responsabilités après mise en ligne. Elle ne constitue ni un tarif garanti ni une proposition personnalisée.",
          "Un devis exploitable doit être établi après clarification du besoin. Il précise le périmètre retenu, les hypothèses, les livrables, les délais, les modalités de validation et les éléments qui feront l’objet d’un chiffrage séparé.",
        ],
      },
      {
        heading: 'Exemple fictif de découpage d’un budget',
        paragraphs: [
          "À titre illustratif, imaginons une petite organisation qui souhaite remplacer un formulaire reçu par email par un parcours en ligne. Le cadrage distingue d’abord le formulaire et les messages de confirmation nécessaires au lancement ; l’espace de suivi, l’export comptable et les notifications avancées sont évalués comme des lots supplémentaires.",
          "Ce découpage ne donne pas un prix universel : le nombre de profils, le traitement des données, les règles de validation et les connexions avec les outils existants peuvent changer fortement l’effort. Il aide en revanche à choisir ce qui doit être chiffré en premier et à reporter les fonctions dont l’utilité n’est pas encore démontrée.",
        ],
      },
      {
        heading: 'Avant de signer',
        bullets: [
          'Vérifier qui fournit les textes, images, accès techniques et validations nécessaires.',
          'Demander comment sont traitées les corrections, les nouvelles demandes et les retards de validation.',
          'Clarifier la propriété des livrables, l’accès au dépôt de code et les licences tierces.',
          'Faire distinguer maintenance corrective, évolutions et coûts récurrents de services externes.',
          'Conserver le devis et ses hypothèses pour vérifier que la livraison correspond à l’accord.',
        ],
      },
    ],
    conclusion:
      "Un budget web devient compréhensible lorsque le périmètre, les livrables et les coûts récurrents sont explicites. Traitez les estimations publiées en ligne comme des indications générales, demandez des devis comparables et commencez par les fonctions qui répondent à un besoin vérifiable. Cet article ne remplace pas un chiffrage établi à partir de votre projet.",
    faq: [
      {
        question: 'Combien coûte un site vitrine réalisé par un freelance ?',
        answer: 'Le prix dépend du nombre de pages, du contenu fourni, du niveau de personnalisation, des fonctions attendues et de l’accompagnement. Une estimation générale ne remplace pas un devis décrivant précisément le périmètre.',
      },
      {
        question: 'Quelles informations fournir pour obtenir un devis ?',
        answer: 'Décrivez les utilisateurs, les objectifs, les pages et fonctions indispensables, les outils à connecter, les contenus disponibles, l’échéance et les contraintes connues. Signalez aussi les fonctionnalités qui peuvent attendre.',
      },
      {
        question: 'Pourquoi deux devis peuvent-ils avoir des montants différents ?',
        answer: 'Ils peuvent couvrir des livrables, un niveau de conception, une recette, des intégrations, une maintenance ou des hypothèses différents. Comparez les postes et les exclusions, pas seulement le total.',
      },
      {
        question: 'Faut-il prévoir un budget de maintenance après la mise en ligne ?',
        answer: 'Oui, il est utile de définir qui gère les mises à jour, les sauvegardes, la surveillance et les corrections. Les coûts récurrents d’hébergement et de services tiers doivent également être identifiés.',
      },
      {
        question: 'Peut-on réduire le coût en livrant le projet par étapes ?',
        answer: 'Souvent, un premier lot limité aux parcours essentiels aide à valider l’usage avant d’ajouter des fonctions. Cela suppose de décider à l’avance ce qui est indispensable et de prévoir comment les lots suivants s’intégreront.',
      },
    ],
  },
  'creer-application-web-sur-mesure': {
    title: 'Créer une application web sur mesure : le guide complet',
    excerpt: 'Les étapes importantes pour transformer un besoin métier en application web utile, maintenable et adoptée.',
    intro:
      "Une application sur mesure n’est pas seulement une addition d’écrans. C’est une façon de simplifier un processus, d’éviter les doubles saisies et de donner aux équipes un outil qui colle à leur vraie manière de travailler.",
    date: '2026-03-10',
    category: 'Guide',
    author: 'Abderrahmane El Farouah',
    sections: [
      {
        heading: 'Commencer par le terrain',
        paragraphs: [
          "Avant de parler technologie, il faut comprendre comment le travail se fait aujourd’hui : fichiers Excel, emails, validations manuelles, outils existants, points de blocage et tâches répétitives.",
          "Cette étape évite de développer une belle interface qui ne résout pas le bon problème.",
        ],
      },
      {
        heading: 'Construire par versions',
        bullets: [
          'Version 1 : le cœur du besoin, utilisable rapidement.',
          'Version 2 : automatisations, tableaux de bord et confort utilisateur.',
          'Version 3 : intégrations externes, statistiques, optimisation et évolutions métier.',
        ],
      },
      {
        heading: 'Prévoir la maintenance dès le départ',
        paragraphs: [
          "Une application utile va évoluer. Il faut donc penser aux rôles utilisateurs, à la sécurité, aux sauvegardes, aux logs, aux tests et à une architecture compréhensible.",
          "Le sur-mesure fonctionne bien quand il reste lisible pour la personne qui devra le maintenir dans six mois.",
        ],
      },
      {
        heading: 'Exemple de première version',
        paragraphs: [
          "Prenons un exemple fictif : une petite équipe reçoit des demandes par email, puis les recopie dans un tableur. Une première version pourrait permettre de créer une demande, de lui attribuer un responsable et un statut, puis de retrouver son historique. Les notifications automatiques et les tableaux de bord détaillés peuvent rester hors du premier lot tant que leur utilité n’a pas été validée.",
          "Pour chaque fonctionnalité retenue, écrivez un critère observable. Par exemple : « un membre connecté peut retrouver les demandes qui lui sont attribuées et filtrer celles qui sont en attente ». Cette formulation aide à estimer, développer et tester la fonctionnalité sans confondre une liste d’écrans avec un résultat métier.",
        ],
      },
      {
        heading: 'Critères de recette à ne pas oublier',
        bullets: [
          'Les rôles autorisés peuvent accomplir leur tâche ; les autres ne peuvent pas accéder à l’action.',
          'Les erreurs de saisie sont compréhensibles et les données restent cohérentes après correction.',
          'Les données importantes peuvent être sauvegardées et restaurées selon une procédure définie.',
          'Les utilisateurs concernés ont validé les parcours principaux sur ordinateur et mobile.',
          'Le projet dispose d’instructions de déploiement et d’un responsable identifié pour son suivi.',
        ],
      },
      {
        heading: 'Choisir une pile technique sans partir de la mode',
        paragraphs: [
          "La technologie doit répondre aux contraintes réelles : compétences de l’équipe, intégrations obligatoires, niveau d’interactivité, exigences de sécurité, hébergement et maintenance. Un CMS peut convenir si le besoin porte surtout sur la publication de contenu ; une application sur mesure se justifie davantage si les processus ou les règles métier ne sont pas couverts par les outils existants.",
          "Évaluez aussi les dépendances à long terme : disponibilité des personnes capables de maintenir le produit, cadence des mises à jour, documentation et facilité de transfert. Une preuve de concept peut lever un risque technique ciblé, mais elle ne doit pas devenir une deuxième application à maintenir indéfiniment.",
        ],
      },
      {
        heading: 'Données, accès et confidentialité',
        paragraphs: [
          "Avant d’importer des informations réelles, déterminez quelles données sont nécessaires, qui peut les consulter et combien de temps elles doivent être conservées. N’utilisez pas de données personnelles de production dans une maquette ou un environnement de test sans cadre approprié.",
          "Les permissions doivent être contrôlées par le serveur, les secrets doivent rester hors du code livré au navigateur et les sauvegardes doivent être protégées. Les obligations applicables dépendent du contexte : elles doivent être examinées avec les responsables compétents, et ne se résument pas à ajouter une case à cocher à l’interface.",
        ],
      },
      {
        heading: 'Préparer l’adoption par les utilisateurs',
        bullets: [
          'Faire tester les principaux parcours par les personnes qui accomplissent réellement ces tâches.',
          'Prévoir des libellés compréhensibles, des erreurs qui indiquent comment avancer et une interface utilisable au clavier.',
          'Décider comment accompagner le changement : courte formation, aide intégrée ou documentation.',
          'Observer les difficultés et demandes récurrentes après le lancement pour prioriser les évolutions.',
        ],
      },
      {
        heading: 'Mesurer si l’application apporte le résultat attendu',
        paragraphs: [
          "Avant le développement, choisissez quelques indicateurs reliés au problème initial : nombre de ressaisies, durée d’une tâche, dossiers incomplets ou demandes perdues. Établissez une référence de départ et réévaluez ces indicateurs après la mise en service.",
          "Les métriques de produit doivent être proportionnées et transparentes. Ne collectez pas plus d’informations que nécessaire et informez les utilisateurs lorsque le suivi peut porter sur leurs activités.",
        ],
      },
    ],
    conclusion:
      "Une application sur mesure réussie commence par un problème observé, pas par une liste de technologies. Cadrer les parcours, livrer une première version limitée, vérifier les accès et faire tester l’outil par ses futurs utilisateurs permet d’apprendre avant d’élargir le périmètre. Prévoyez dès le début la maintenance, la protection des données et les critères qui permettront d’évaluer le résultat.",
    faq: [
      {
        question: 'Quand faut-il créer une application web sur mesure ?',
        answer: 'Quand un processus important est mal couvert par les outils disponibles et que le bénéfice attendu justifie le coût de conception, de développement et de maintenance. Il faut d’abord documenter les tâches et les irritants réels.',
      },
      {
        question: 'Que doit contenir un MVP ?',
        answer: 'Un MVP contient le plus petit ensemble de fonctions qui permet à de vrais utilisateurs de réaliser le parcours principal et de vérifier l’hypothèse de départ. Les options secondaires peuvent attendre une validation de leur utilité.',
      },
      {
        question: 'Combien de temps faut-il pour développer une application ?',
        answer: 'La durée dépend du périmètre, des intégrations, des données à reprendre, des décisions disponibles et des validations. Un calendrier fiable se construit après le cadrage et doit faire apparaître les hypothèses et dépendances.',
      },
      {
        question: 'Comment protéger les données de l’application ?',
        answer: 'Limitez les données collectées, appliquez les permissions côté serveur, protégez les secrets et les sauvegardes, sécurisez les échanges et définissez une procédure de mise à jour. Les mesures précises dépendent du risque et des données traitées.',
      },
      {
        question: 'Comment savoir si l’application est utile aux équipes ?',
        answer: 'Associez les utilisateurs au cadrage et à la recette, puis observez des indicateurs reliés au problème initial, comme les ressaisies ou la durée d’un parcours. Recueillez aussi les difficultés d’usage, sans mettre en place de suivi disproportionné.',
      },
    ],
  },
  'seo-technique-optimiser-react': {
    title: 'SEO technique : optimiser la performance de votre site React',
    excerpt: 'Les points techniques qui comptent vraiment pour rendre une application React ou Angular plus lisible par Google.',
    intro:
      "Le SEO technique n’est pas une couche magique ajoutée à la fin. Il commence dans la structure HTML, la performance, les URLs, les métadonnées et la façon dont le contenu est disponible pour les moteurs de recherche.",
    date: '2026-02-20',
    category: 'SEO',
    author: 'Abderrahmane El Farouah',
    sections: [
      {
        heading: 'Rendre le contenu accessible',
        paragraphs: [
          "Sur une application React ou Angular, il faut vérifier que les pages importantes ont des URLs propres, des titres uniques, des descriptions utiles et un contenu visible sans interaction complexe.",
          "Pour les pages très stratégiques, le rendu côté serveur ou la pré-génération peut faire une vraie différence.",
        ],
      },
      {
        heading: 'Soigner les signaux techniques',
        bullets: [
          'Un seul H1 clair par page.',
          'Des balises title et meta description différentes pour chaque route.',
          'Des liens internes en vrais liens HTML quand c’est possible.',
          'Un sitemap à jour avec les pages importantes.',
          'Des images optimisées et correctement décrites.',
        ],
      },
      {
        heading: 'Ne pas oublier la vitesse',
        paragraphs: [
          "Google regarde l’expérience utilisateur. Des bundles trop lourds, des images mal compressées ou une mise en page qui saute au chargement pénalisent la page.",
          "Le bon réflexe consiste à mesurer régulièrement : Lighthouse, Core Web Vitals, taille des assets et comportement sur mobile.",
        ],
      },
      {
        heading: 'Une vérification reproductible avant mise en ligne',
        bullets: [
          'Ouvrir l’URL en navigation privée et vérifier le code HTML reçu, pas seulement le DOM après exécution de JavaScript.',
          'Contrôler que le titre, la description, le H1 et l’URL canonique correspondent à cette page précise.',
          'Tester un rechargement direct de l’URL et vérifier la réponse HTTP, les liens internes et l’absence d’erreur JavaScript.',
          'Vérifier que le sitemap ne contient que des URL canoniques accessibles et indexables.',
          'Mesurer les Core Web Vitals sur de vraies pages représentatives ; un score Lighthouse ponctuel n’est pas une mesure du terrain.',
        ],
      },
      {
        heading: 'Choisir le rendu selon les pages',
        paragraphs: [
          "Une page éditoriale dont le texte doit être immédiatement disponible aux visiteurs et aux robots peut bénéficier du rendu serveur ou de la génération statique. Une interface privée, accessible après connexion, n’a pas nécessairement les mêmes besoins d’indexation.",
          "Le prérendu doit être contrôlé dans le HTML réellement déployé : un répertoire créé pour une route ne prouve pas que son contenu est présent dans la réponse. Testez notamment l’accès direct à la page, son titre unique, son contenu et ses liens, puis surveillez les erreurs d’exploration dans Search Console.",
        ],
      },
      {
        heading: 'Rendu client, rendu serveur ou génération statique',
        paragraphs: [
          "En rendu client (CSR), le serveur envoie principalement une coquille HTML puis le navigateur construit l’interface avec JavaScript. En rendu serveur (SSR), le serveur renvoie du HTML généré pour la requête. En génération statique (SSG), les pages sont produites pendant le build puis servies comme fichiers. Certaines applications combinent ces stratégies selon le type de route.",
          "Aucune option n’est toujours la meilleure. Le SSR implique une infrastructure et des contraintes d’exécution côté serveur ; le SSG convient aux contenus qui peuvent être reconstruits lors des mises à jour ; le CSR peut être adapté à des interfaces privées ou très interactives. Choisissez selon la fraîcheur du contenu, les besoins de personnalisation, le coût d’hébergement et les exigences d’expérience.",
        ],
      },
      {
        heading: 'Métadonnées et URL par page',
        paragraphs: [
          "Chaque page qui doit être trouvée devrait avoir une URL stable, un titre distinct qui décrit son sujet, une description fidèle au contenu, un H1 explicite et une URL canonique correcte. Les variantes de filtrage, de paramètres et de slash final doivent être examinées afin d’éviter plusieurs URL pour le même contenu.",
          "Les données structurées ne remplacent pas le contenu visible et ne garantissent pas un affichage enrichi. Si vous en publiez, les informations doivent correspondre à la page et respecter le vocabulaire Schema.org utilisé.",
        ],
      },
      {
        heading: 'Mesurer les performances sans confondre score et expérience',
        paragraphs: [
          "Lighthouse aide à repérer des problèmes dans un test simulé ; les données de terrain montrent l’expérience de visiteurs réels lorsque le volume et la disponibilité des mesures le permettent. Un score unique peut varier selon l’appareil, le réseau, la cache et les scripts tiers. Enregistrez le contexte de mesure et comparez les mêmes pages dans des conditions comparables.",
          "Les Core Web Vitals portent notamment sur le chargement du contenu principal, la réactivité et la stabilité visuelle. Pour améliorer un résultat, reliez la mesure à un élément concret : image principale trop lourde, polices bloquantes, script tiers, tâche JavaScript longue ou dimensions d’image manquantes.",
        ],
      },
      {
        heading: 'Checklist avant publication',
        bullets: [
          'Recharger directement chaque URL importante et vérifier la réponse HTTP ainsi que son rendu.',
          'Contrôler le HTML livré, les métadonnées, le H1, les liens et la version mobile.',
          'Tester les redirections, les erreurs 404, les URL canoniques et le sitemap.',
          'Vérifier le fonctionnement sans extensions de navigateur et surveiller les erreurs JavaScript.',
          'Recontrôler après déploiement les pages modifiées et les rapports d’indexation disponibles.',
        ],
      },
    ],
    conclusion:
      "Le SEO technique commence par des pages utiles dont le contenu et les URL sont accessibles et cohérents. Vérifiez la réponse réellement servie, les métadonnées, les redirections et les performances avec des mesures reproductibles. Le choix CSR, SSR ou SSG doit correspondre au contenu et à l’exploitation du site ; aucune technique ne garantit à elle seule un classement.",
    faq: [
      {
        question: 'Un site React en rendu client peut-il être indexé ?',
        answer: 'Les moteurs peuvent exécuter du JavaScript, mais cela ajoute des étapes et doit être vérifié pour vos pages réelles. Pour du contenu éditorial important, contrôlez le HTML reçu et envisagez un rendu serveur ou une génération statique si cela répond mieux au besoin.',
      },
      {
        question: 'Le prérendu améliore-t-il automatiquement le référencement ?',
        answer: 'Non. Il peut rendre le contenu initial plus directement disponible, mais il ne remplace ni la qualité de la page, ni des URL correctes, ni les liens internes, ni les autres signaux d’expérience. Vérifiez le résultat dans la réponse déployée.',
      },
      {
        question: 'Faut-il une URL canonique sur chaque page ?',
        answer: 'Pour les pages indexables, une canonique cohérente aide à signaler l’URL principale. Elle doit pointer vers une page accessible et représentative, et ne doit pas contredire les redirections ou les signaux internes.',
      },
      {
        question: 'Lighthouse suffit-il pour valider les performances ?',
        answer: 'Non. C’est un diagnostic utile en laboratoire, mais les conditions varient. Complétez-le, lorsque c’est possible, par des mesures de terrain et répétez les tests sur les mêmes parcours et appareils.',
      },
      {
        question: 'Les données structurées garantissent-elles des résultats enrichis ?',
        answer: 'Non. Elles aident à décrire le contenu aux moteurs, mais l’éligibilité et l’affichage dépendent de leurs règles. Le balisage doit être valide, conforme et correspondre au contenu visible.',
      },
    ],
  },
};

const ADSENSE_CLIENT = 'ca-pub-5921232882242644';
const ADSENSE_SLOT = '8561894521';

function AdSenseBlock({ slot }: { slot: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as typeof window & {
        adsbygoogle?: unknown[];
      };
      win.adsbygoogle = win.adsbygoogle || [];
      win.adsbygoogle.push({});
    }
  }, []);

  return (
    <motion.aside
      className="my-12 overflow-hidden rounded-2xl border border-[#dfe3e8] bg-[#f7f9fa] p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Publicité"
    >
      <div className="mb-2 text-xs font-medium text-text-muted">
        Publicité
      </div>

      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '120px' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </motion.aside>
  );
}

function BlogArticle() {
  const { slug } = Route.useParams();
  const article = articlesData[slug];

  useEffect(() => {
    if (!article) return;

    const scriptSelector = 'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';
    if (document.querySelector(scriptSelector)) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }, [article]);

  if (!article) {
    return (
      <Container className="py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-main mb-4">Article non trouvé</h1>
          <p className="text-text-secondary mb-6">Cet article n'existe pas ou a été déplacé.</p>
          <Link to="/blog" className="text-accent hover:underline">
            Retour au blog
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      <div className="min-h-screen page-shell prose-premium">
        <Container className="py-12 md:py-16 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent hover:underline mb-8 touch-area focus-visible"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>

          <motion.header
            className="mb-12 border-b border-black/10 pb-10 dark:border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.header>

          <motion.article
            className="max-w-none text-text-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed">
              {article.intro}
            </p>

            <div className="space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-5 leading-tight">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-lg text-text-secondary leading-8 mb-5">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-4 text-lg text-text-secondary">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-4 leading-8">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="mt-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-text-main mb-4">
                        {subsection.heading}
                      </h3>
                      {subsection.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-lg text-text-secondary leading-8 mb-5">
                          {paragraph}
                        </p>
                      ))}
                      {subsection.bullets && (
                        <ul className="space-y-4 text-lg text-text-secondary">
                          {subsection.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-4 leading-8">
                              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <div className="article-callout mt-14 p-6">
              <p className="text-lg text-text-main leading-8">
                {article.conclusion}
              </p>
            </div>

            {article.faq && (
              <section className="mt-14" aria-labelledby="article-faq-heading">
                <h2 id="article-faq-heading" className="text-2xl md:text-3xl font-bold text-text-main mb-6">
                  Questions fréquentes
                </h2>
                <div className="space-y-8">
                  {article.faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-xl font-semibold text-text-main mb-3">
                        {item.question}
                      </h3>
                      <p className="text-lg text-text-secondary leading-8">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <AdSenseBlock slot={ADSENSE_SLOT} />
          </motion.article>

          <motion.div
            className="mt-16 p-8 card-bento"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-text-main mb-4">
              Vous avez un projet {article.category.toLowerCase()} ?
            </h3>
            <p className="text-text-secondary mb-6">
              Discutons de votre projet et obtenez un devis personnalisé gratuitement.
            </p>
            <Link
              to="/contact"
              className="btn btn-premium inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Me contacter</span>
            </Link>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export const Route = createFileRoute('/blog/$slug')({
  component: BlogArticle,
});
