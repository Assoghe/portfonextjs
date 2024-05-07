import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import React from 'react';


export const navLinks = [
  {
    label: "Portfolio",
    url: "/",
  },
  {
    label: "A propos",
    url: "/a-propos",
  },
  {
    label: "Livre blanc",
    url: "/livre-blanc",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    label: "Github",
    icon: FaGithub,
    url: "https://github.com/Assoghe",
  },
  {
    id: 2,
    label: "Behance",
    icon: FaBehance,
    url: "https://www.behance.net/sorayagherras1",
  },
  {
    id: 3,
    label: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/soraya-gherras/",
  },
  {
    id: 4,
    label: "Mail",
    icon: HiMail,
    url: "#",
  },
];

export const portfolioData = [
  {
    name: "Mangas'Fan",
    description: "Site d'actualité mangas et animés",
    image: "/assets/img/mangasfan.png",
    id: 1,
    case: {
      descriptionName: "Mangas'Fan",
      descriptionText: "Site d'actualité mangas et animés",
      descriptionImageCover: "/assets/img/mangasfan.png",
      infoClient: "Mangas'Fan",
      infoLiens: "Figma",
      infoRole: "UX Designer UI designer",
      aboutTitle: "A propos du projet",
      aboutText: "Mangas’Fan est une plateforme web communautaire gérée par des passionnés de mangas et d'animés, qui propose des informations sur l'actualité liée à la japanimation. Dans l’équipe, nous retrouvons trois dévéloppeurs (fondateur inclus) ainsi qu'un designer",
      aboutProbleme: "Parmis les problèmes rencontrés, on trouve une arborescence incomplète, un design vieillissant ainsi qu'un contenu qui n'est pas réguliers. Mangas'Fan fait également face à une concurrence rude avec du contenu qui est régulièrement mis à jour comparé eux.",
      aboutSolution: "La refonte de Mangas’Fan pourrait résoudre une grande partie des problèmes que le site fait face. En effet, on pourrait améliorer la navigation, introduire de nouvelles fonctionnalités pour fidéliser la communauté. Par cette refonte, on pourrait créer un design system qui va nous permettre créer une cohérence visuelle pour l'utilisateur et assurer une maintenance efficace dans le temps d'un point de vue développement.",
      veilleText: "Pour le projet de Mangas’Fan, j'ai effectué une veille en analysant deux sites : Nautiljon et Hyakanim. Nautiljon est une référence sur l’actualité manga et animé mais possède un design qui est vieillissant et d'une structure parfois pas forcément lisible. Hyakanim est egalement comme Nautiljon un site de référence beaucoup plus récente mais possède moins de contenu",
      veille: "/assets/img/usecase/mangasfan/veille.png",
      architectureText: "J’ai redéfini l’architecture de Mangas’Fan pour améliorer l'expérience sur le site. J'ai ajouté une section ‘animés’ et ‘mangas’, ainsi qu'une section ‘wiki’. Durant la refonte, le fondateur a souhaité ajouter une section ‘boutique’ et une section ‘communauté’. Enfin, une page de profil a été créée avec la possibilité pour les utilisateurs d'ajouter leurs mangas et animés.",
      architectureImg: "/assets/img/usecase/mangasfan/architecture.png",
      wireframeText: "J’ai réalisé deux wireframes : celui de la page d’accueil et celui d’une page type d’animé, car pour moi c'est considérées comme les deux pages principales.",
      wireframeImg: "/assets/img/usecase/mangasfan/wireframe.png",
      designsystemText: "J’ai réalisé un design system pour Mangas’Fan afin d'homogénéiser les pages et de faciliter la réutilisation des composants. Vous trouverez ici quelques éléments du design system tels que les couleurs, les boutons, les inputs, les cards, etc.",
      designsystemImg: "/assets/img/usecase/mangasfan/design.png",
      maquetteImgOne: "/assets/img/usecase/mangasfan/maquette-one.png",
      maquetteHeadingOne: "Page d’accueil",
      maquetteTextOne: "Cette page comprend plusieurs sections : les dernières actualités et japanimations ajoutées récemment, le coup de cœur du mois du staff, ainsi que les mangas et les derniers éléments ajoutés au wiki. Chaque section à son propre 'rythme'",
      maquetteImgTwo: "/assets/img/usecase/mangasfan/maquette-two.png",
      maquetteHeadingTwo: "Page d'une fiche animé",
      maquetteTextTwo: "Cette page présente les informations associées à l'animé. Dedans on y retrouve le trailer, une galerie photo, les articles et une section sitographie.",
      conclusionText: "La refonte du site Mangas'Fan marque une étape significative dans l'amélioration de l'expérience utilisateur. Bien que le projet ne soit pas encore achevé, plusieurs effets positifs peuvent déjà être anticipés tel que: -Distinction par rapport à ceux des concurrents: Cette refonte permet de créer un design distinctif par rapport à celui des concurrents.- Création d'un design system pour la maintenance et l'harmonisation: La mise en place d'un design system facilitera la maintenance et l'harmonisation de l'interface, tant du point de vue du développement que de l'expérience utilisateur lors de leur navigation.",
      footerImg: "/assets/img/usecase/mangasfan/design-end.png"
    }
  },

  {
    name: "Tattoomorrow",
    description: "Application de gestion pour les tatoueurs",
    image: "/assets/img/tattoomorrow.webp",
    id: 2,
    case: {
      descriptionName: "Tattoomorrow",
      description: "Application de gestion pour les tatoueurs",
      descriptionImageCover: "/assets/img/tattoomorrow.webp",
      infoClient: "MedMax",
      infoLiens: "Adobe XD",
      infoRole: "UX Designer, UI designer",
      aboutTitle: "A propos du projet",
      aboutText: "Dans le milieu du tatouage, nous retrouvons beaucoup de documents administratifs comme des décharges à faire signer aux clients, des documents sur la traçabilité du matériel, des fiches de soins, etc. C’est sur ces problématiques que deux spécialistes du tatouage ont souhaité travailler avec nous dans l'objectif de créer une application facilitant la gestion d'un salon de tatouage pour les professionnels. Avant le début de mon contrat d'alternance chez Apps Panel, le chef de projet avait déjà commencé à travailler dessus. Il avait réalisé une arborescence et des wireframes pour quelques écrans que j'ai par la suite retravailler en me basant sur son travail.",
      aboutProbleme: "Cette partie administrative présente un certain nombre de problèmes pour les tatoueurs professionnels. Le principal problème est sans doute la perte de temps pour les tatoueurs, qui pourrait être utilisé de manière plus productive. On retrouve beaucoup de papier et donc des éléments qui peuvent très facilement se perdre.",
      aboutSolution: "La solution serait lacréation de cette application que MedMax souhaite faire développer. En effet cette interface destiné aux tatoueurs professionnels va les permettre de gerer leur salon. Parmis fonctionnalités principaux on pourrait retrouver la gestion des fiches clients avec leurs coordonnées et leurs documents (décharges, projets de tatouage des clients, etc.).Ainsi que la planification des rendez-vous et la gestion des décharges et des fiches de soin.",
      veilleText: "Lors de la conception de Tattoomorrow, aucune application similaire n'a été identifiée. Pour combler cette lacune, une planche d'ambiance sur l'univers du tatouage a été créée pour définir une esthétique en accord avec l'atmosphère recherchée pour l'application mobile.",
      veille: "/assets/img/usecase/tattoo/veille.png",
      architectureText: "Le projet bénéficiait déjà d'une arborescence préétablie par le chef de projet, qui comprend des sections telles que l'Accueil', l'Agenda' pour la gestion des rendez-vous, les C'lients' offrant une liste détaillée, et le 'Compte' permettant de gérer les aspects administratifs du salon.",
      architectureImg: "/assets/img/usecase/tattoo/architecture.png",
      wireframeText: "En s'appuyant sur les wireframes fournis, la page d'accueil et la fiche client ont été conçues pour offrir une expérience utilisateur intuitive et efficace.",
      wireframeImg: "/assets/img/usecase/tattoo/wireframe.png",
      designsystemText: "Un design system a été mis en place avec Adobe XD, regroupant tous les éléments graphiques nécessaires pour maintenir la cohérence visuelle de l'application.",
      designsystemImg: "/assets/img/usecase/tattoo/design.png",
      maquetteImgOne: "/assets/img/usecase/tattoo/maquette-one.png",
      maquetteHeadingOne: "Page d'accueil et page clients",
      maquetteTextOne: "La page d'accueil présente les derniers clients modifiés et les prochains rendez-vous. Cette page offre à l'utilisateur une vue d'ensemble rapide. La page client permet de gérer les informations relatives à chaque client et de planifier de nouveaux rendez-vous.",
      maquetteImgTwo: "/assets/img/usecase/tattoo/maquette-two.png",
      maquetteHeadingTwo: "Fiche projet d'un client et page du compte",
      maquetteTextTwo: "La fiche projet d'un client offre un aperçu détaillé du projet, avec des liens rapides vers le paiement, la décharge, et la traçabilité des produits. La page du compte permet de gérer les paramètres et les informations générales du salon.",
      conclusionText: "Deux ans après son lancement en 2022, Tattoomorrow a  accompagnés bon nombre de tatoueurs professionnels. - Gain de temps: L'utilisation de l'application permet aux tatoueurs d'économiser environ 4 heures de gestion par semaine, libérant ainsi plus de temps pour leur pratique artistique.- Réduction de la consommation de papier: Tattoomorrow a contribué à une baisse de 11 kg de consommation de papier par an, favorisant une approche plus écologique de la gestion des salons de tatouage.- Économies financières: En moyenne, les tatoueurs réalisent une économie annuelle de 225 euros sur l'achat de fournitures grâce à l'efficacité de l'application.- Réactions positives des utilisateurs: Les retours des utilisateurs qualifient Tattoomorrow de 'must have' pour les professionnels du tatouage, soulignant son importance quotidienne et son impact positif sur leur gestion, leur efficacité et la satisfaction client.- En conclusion, Tattoomorrow a significativement amélioré la productivité des tatoueurs, tout en contribuant à des économies de temps, d'argent et de ressources, tout en recevant des éloges pour son utilité et son intégration essentielle dans leur pratique professionnelle. (Source: le site officiel Tattoomorrow)",
      footerImg: "/assets/img/usecase/tattoo/design-end.png"
    }
  },

  {
    name: "GoodFamily",
    id: 3,
    description: "Application de gestion de budget familiale gamifié",
    image: "/assets/img/goodfamily.webp",
    case: {
      descriptionName: "Good Family",
      descriptionText: "Application de gestion de budget familiale en utilisant la gamification",
      descriptionImageCover: "/assets/img/goodfamily.webp",
      infoClient: "Projet d'école",
      infoLiens: "Figma",
      infoRole: "UX Designer UI designer",
      aboutTitle: "A propos du projet",
      aboutText: "Durant nos cours de gamification, nous devions réaliser en groupe une application mobile sur une gestion de budget familial gamifiée. Nous étions quatre étudiantes sur ce projet.",
      aboutProbleme: " La gestion d'un budget familial pose souvent des difficultés. On retrouve par exemple un manque de transparence et de visibilité sur les dépenses familiales. On peut egalement noter un mange d'outils ludiques pour impliquer tous les membres de la famille dans la gestion budgétaire. Et surtout des  difficultés à maintenir la motivation et l'engagement dans le suivi régulier des finances familiales.",
      aboutSolution: "Par le biais de la gamification, nous proposons aux utilisateurs :Une expérience ludique adaptée tant aux adultes qu'aux adolescents. On va egalement proposé des  conseils personnalisés pour les aider à optimiser au mieux leur budget. Un système de récompenses va permettre de motiver et féliciter les utilisateurs lorsqu'ils réussissent un défi.",
      veilleText: "Parmi les applications existantes liées à notre projet, nous avons retenu l'application Bankin. Bankin est une application mobile qui permet de gagner de l'argent grâce au cashback lors des dépenses. Elle permet également de gérer son budget grâce à des alertes personnalisées.",
      veille: "/assets/img/usecase/good/veille.png",
      veilleConclusion: "Dans notre recherche d'applications similaires, nous avons examiné Bankin, une application mobile offrant des avantages de cashback et des fonctionnalités de gestion budgétaire, comme des alertes personnalisées et des objectifs financiers.",
      architectureText: "Nous avons élaboré une structure claire pour notre application, incluant des sections telles que la page d'accueil, le calendrier, les défis, la boutique et l'inventaire.",
      architectureImg: "/assets/img/usecase/good/architecture.png",
      wireframeText: "On a créé des wireframes pour les pages principaux, comme la page d'accueil, le calendrier, les défis, la boutique et l'inventaire.",
      wireframeImg: "/assets/img/usecase/good/wireframe.png",
      designsystemText: "Nous avons mis en place un design system comprenant une identité visuelle, une mascotte (le cochon nommé Piggy), une grille de mise en page, des typographies, des couleurs et des icônes. Ce document a pu nous permettre de garantir tout le long du projet une cohérence visuelle et une expérience utilisateur homogène tout en travaillant en meme temps sur le projet.",
      designsystemImg: "/assets/img/usecase/good/design.png",
      maquetteImgOne: "/assets/img/usecase/good/maquette-one.png",
      maquetteHeadingOne: "Page d'accueil et page challenge",
      maquetteTextOne: "La page d'accueil présente un aperçu des dépenses mensuelles et des objectifs personnels, ainsi que les prochaines échéances financières. Les défis proposent des questions interactives pour sensibiliser à l'épargne, tandis que la boutique offre des récompenses à échanger contre des bons de réduction.",
      maquetteImgTwo: "/assets/img/usecase/good/maquette-two.png",
      maquetteHeadingTwo: "Page boutique, page inventaire et page calendrier",
      maquetteTextTwo: "L'inventaire permet de gérer les récompenses et de les utiliser en caisse, tandis que le calendrier affiche les prochaines dépenses à prévoir, comme les factures mensuelles ou les anniversaires.",
      conclusionText: "Bien que Good Family soit un projet fictif, nous pouvons envisager plusieurs impacts positifs :- Une amélioration de la gestion budgétaire familiale ludique grâce à la gamification.- Renforcement de l'engagement et de la participation au sein de la famille qui va favoriser les échanges et renforçer les liens familiaux autour d'un objectif commun.- Le développement de bonnes habitudes financières chez les membres de la famille.- Une réduction du stress financier grâce à une gestion budgétaire efficace, contribuant ainsi à un bien- être financier.",
      footerImg: "/assets/img/usecase/good/design-end.png"
    }
  },
]

export const dailyData = [
  {
    name: "Daily Ui Challenge",
    description: "Challenge journaliere sur l'UI design",
    image: "/assets/img/dailychallengeui.png",
    dailyCases: [

      {
        dailyNumber: "Daily Challenge 1",
        dailyTitle: "Ecran d’une card d’un produit",
        dailyImg: "/assets/img/daily/one.png"
      },

      {
        dailyNumber: "Daily Challenge 2",
        dailyTitle: "Ecran  d’un player audio",
        dailyImg: "/assets/img/daily/two.png"
      },

      {
        dailyNumber: "Daily Challenge 3",
        dailyTitle: "Ecran d’une page de connexion",
        dailyImg: "/assets/img/daily/three.png"
      },

      {
        dailyNumber: "Daily Challenge 4",
        dailyTitle: "Ecran d’une page d’inscription",
        dailyImg: "/assets/img/daily/four.png"
      },

      {
        dailyNumber: "Daily Challenge 5",
        dailyTitle: "Ecran d’une pop up",
        dailyImg: "/assets/img/daily/five.png"
      },

      {
        dailyNumber: "Daily Challenge 6",
        dailyTitle: "Ecran d’un calendrier",
        dailyImg: "/assets/img/daily/six.png"
      },

      {
        dailyNumber: "Daily Challenge 7",
        dailyTitle: "Ecran d’une carte de crédit",
        dailyImg: "/assets/img/daily/seven.png"
      },

      {
        dailyNumber: "Daily Challenge 8",
        dailyTitle: "Ecran d’une liste de catégories",
        dailyImg: "/assets/img/daily/eight.png"
      },

      {
        dailyNumber: "Daily Challenge 9",
        dailyTitle: "Ecran d’une pop up de confirmation",
        dailyImg: "/assets/img/daily/nine.png"
      },

      {
        dailyNumber: "Daily Challenge 10",
        dailyTitle: "Ecran d’une vue de profile ",
        dailyImg: "/assets/img/daily/ten.png"
      },

      {
        dailyNumber: "Daily Challenge 11",
        dailyTitle: "Ecran d’une page de code PIN",
        dailyImg: "/assets/img/daily/eleven.png"
      },

      {
        dailyNumber: "Daily Challenge 12",
        dailyTitle: "Ecran d’une map",
        dailyImg: "/assets/img/daily/twelve.png"
      },

      {
        dailyNumber: "Daily Challenge 13",
        dailyTitle: "Ecran d’une calculatrice",
        dailyImg: "/assets/img/daily/thirteen.png"
      },

      {
        dailyNumber: "Daily Challenge 14",
        dailyTitle: "Ecran d’une page catégories",
        dailyImg: "/assets/img/daily/fourteen.png"
      },

      {
        dailyNumber: "Daily Challenge 15",
        dailyTitle: "Ecran d’une page de cards",
        dailyImg: "/assets/img/daily/fifteen.png"
      },

      {
        dailyNumber: "Daily Challenge 16",
        dailyTitle: "Ecran d’une card article",
        dailyImg: "/assets/img/daily/sixteen.png"
      },

      {
        dailyNumber: "Daily Challenge 17",
        dailyTitle: "Ecran d’un graphique (lignes)",
        dailyImg: "/assets/img/daily/seventeen.png"
      },

      {
        dailyNumber: "Daily Challenge 18",
        dailyTitle: "Ecran d’un graphique (bâton)",
        dailyImg: "/assets/img/daily/eighteen.png"
      },

      {
        dailyNumber: "Daily Challenge 19",
        dailyTitle: "Ecran un carousel",
        dailyImg: "/assets/img/daily/nineteen.png"
      },

      {
        dailyNumber: "Daily Challenge 20",
        dailyTitle: "Ecran d’une page de liste de pays",
        dailyImg: "/assets/img/daily/twenty.png"
      },

      {
        dailyNumber: "Daily Challenge 21",
        dailyTitle: "Ecran pour entrer son code Pin",
        dailyImg: "/assets/img/daily/twenty-one.png"
      },

      {
        dailyNumber: "Daily Challenge 22",
        dailyTitle: "Ecran de confirmation de paiement",
        dailyImg: "/assets/img/daily/twenty-two.png"
      },

      {
        dailyNumber: "Daily Challenge 23",
        dailyTitle: "Ecran d’alarme",
        dailyImg: "/assets/img/daily/twenty-three.png"
      },

      {
        dailyNumber: "Daily Challenge 24",
        dailyTitle: "Ecran une vue météo",
        dailyImg: "/assets/img/daily/twenty-four.png"
      },

      {
        dailyNumber: "Daily Challenge 25",
        dailyTitle: "Ecran d’une FAQ",
        dailyImg: "/assets/img/daily/twenty-five.png"
      },

      {
        dailyNumber: "Daily Challenge 26",
        dailyTitle: "Ecran de réponse d’une FAQ ",
        dailyImg: "/assets/img/daily/twenty-six.png"
      },

      {
        dailyNumber: "Daily Challenge 27",
        dailyTitle: "Ecran message bien envoyé",
        dailyImg: "/assets/img/daily/twenty-seven.png"
      },

      {
        dailyNumber: "Daily Challenge 28",
        dailyTitle: "Ecran SMS verification",
        dailyImg: "/assets/img/daily/twenty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 29",
        dailyTitle: "Ecran d’une vue caméra",
        dailyImg: "/assets/img/daily/twenty-nine.png"
      },

      {
        dailyNumber: "Daily Challenge 30",
        dailyTitle: "Ecran d’une page de contact",
        dailyImg: "/assets/img/daily/thirty.png"
      },

      {
        dailyNumber: "Daily Challenge 31",
        dailyTitle: "Ecran feedback",
        dailyImg: "/assets/img/daily/thirty-one.png"
      },

      {
        dailyNumber: "Daily Challenge 32",
        dailyTitle: "Ecran d’une une liste de checkbox",
        dailyImg: "/assets/img/daily/thirty-two.png"
      },

      {
        dailyNumber: "Daily Challenge 33",
        dailyTitle: "Ecran site de rencontre",
        dailyImg: "/assets/img/daily/thirty-three.png"
      },

      {
        dailyNumber: "Daily Challenge 34",
        dailyTitle: "Ecran de page d’accueil",
        dailyImg: "/assets/img/daily/thirty-four.png"
      },

      {
        dailyNumber: "Daily Challenge 35",
        dailyTitle: "Ecran d’une landing page web",
        dailyImg: "/assets/img/daily/thirty-five.png"
      },

      {
        dailyNumber: "Daily Challenge 36",
        dailyTitle: "Ecran d’un E-ticket d’un avion ",
        dailyImg: "/assets/img/daily/thirty-six.png"
      },

      {
        dailyNumber: "Daily Challenge 37",
        dailyTitle: "Ecran d’une carte identité électronique",
        dailyImg: "/assets/img/daily/thirty-seven.png"
      },

      {
        dailyNumber: "Daily Challenge 38",
        dailyTitle: "Ecran d’un message",
        dailyImg: "/assets/img/daily/thirty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 39",
        dailyTitle: "Ecran inbox",
        dailyImg: "/assets/img/daily/thirty-nine.png"
      },

      {
        dailyNumber: "Daily Challenge 40",
        dailyTitle: "Ecran de code temporaire",
        dailyImg: "/assets/img/daily/forty.png"
      },

      {
        dailyNumber: "Daily Challenge 41",
        dailyTitle: "Ecran QR code",
        dailyImg: "/assets/img/daily/forty-one.png"
      },

      {
        dailyNumber: "Daily Challenge 42",
        dailyTitle: " Ecran avec les détails de l'expédition",
        dailyImg: "/assets/img/daily/forty-two.png"
      },

      {
        dailyNumber: "Daily Challenge 43",
        dailyTitle: "Ecran de détail de transaction",
        dailyImg: "/assets/img/daily/forty-three.png"
      },

      {
        dailyNumber: "Daily Challenge 44",
        dailyTitle: "Ecran de thermes et conditions",
        dailyImg: "/assets/img/daily/forty-four.png"
      },

      {
        dailyNumber: "Daily Challenge 45",
        dailyTitle: "Ecran de choix de compte",
        dailyImg: "/assets/img/daily/forty-five.png"
      },

      {
        dailyNumber: "Daily Challenge 46",
        dailyTitle: "Ecran erreur 404",
        dailyImg: "/assets/img/daily/forty-six.png"
      },

      {
        dailyNumber: "Daily Challenge 47",
        dailyTitle: "Ecran d’invitation à rejoindre un groupe",
        dailyImg: "/assets/img/daily/forty-seven.png"
      },

      {
        dailyNumber: "Daily Challenge 48",
        dailyTitle: "Ecran de menu",
        dailyImg: "/assets/img/daily/forty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 49",
        dailyTitle: "Ecran ’’A propos’’",
        dailyImg: "/assets/img/daily/forty-nine.png"
      },

      {
        dailyNumber: "Daily Challenge 50",
        dailyTitle: "Ecran de bon de commande",
        dailyImg: "/assets/img/daily/forty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 51",
        dailyTitle: "Ecran de filtre",
        dailyImg: "/assets/img/daily/fifty-one.png"
      },

      {
        dailyNumber: "Daily Challenge 52",
        dailyTitle: "Ecran de contact (Vide)",
        dailyImg: "/assets/img/daily/fifty-two.png"
      },

      {
        dailyNumber: "Daily Challenge 53",
        dailyTitle: "Ecran de tableau",
        dailyImg: "/assets/img/daily/fifty-three.png"
      },

      {
        dailyNumber: "Daily Challenge 54",
        dailyTitle: "Ecran “attention contenu +18”",
        dailyImg: "/assets/img/daily/fifty-four.png"
      },

      {
        dailyNumber: "Daily Challenge 55",
        dailyTitle: "Ecran liste de notifications",
        dailyImg: "/assets/img/daily/fifty-five.png"
      },

      {
        dailyNumber: "Daily Challenge 56",
        dailyTitle: "Ecran compte en banque",
        dailyImg: "/assets/img/daily/fifty-six.png"
      },

      {
        dailyNumber: "Daily Challenge 57",
        dailyTitle: "Ecran carte bancaire bloquée",
        dailyImg: "/assets/img/daily/fifty-seven.png"
      },

      {
        dailyNumber: "Daily Challenge 58",
        dailyTitle: "Ecran galerie photo",
        dailyImg: "/assets/img/daily/fifty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 59",
        dailyTitle: "Ecran questionnaire",
        dailyImg: "/assets/img/daily/fifty-nine.png"
      },

      {
        dailyNumber: "Daily Challenge 60",
        dailyTitle: "Ecran de détail produit",
        dailyImg: "/assets/img/daily/sixty.png"
      },

      {
        dailyNumber: "Daily Challenge 61",
        dailyTitle: "Ecran barre de recherche avec suggesion",
        dailyImg: "/assets/img/daily/sixty-one.png"
      },

      {
        dailyNumber: "Daily Challenge 62",
        dailyTitle: "Ecran de livraison",
        dailyImg: "/assets/img/daily/sixty-two.png"
      },

      {
        dailyNumber: "Daily Challenge 63",
        dailyTitle: "Ecran de paiement",
        dailyImg: "/assets/img/daily/sixty-three.png"
      },

      {
        dailyNumber: "Daily Challenge 64",
        dailyTitle: "Ecran page produit",
        dailyImg: "/assets/img/daily/sixty-four.png"
      },

      {
        dailyNumber: "Daily Challenge 65",
        dailyTitle: "Ecran réservation",
        dailyImg: "/assets/img/daily/sixty-five.png"
      },

      {
        dailyNumber: "Daily Challenge 66",
        dailyTitle: "Ecran localisation des magasins avec des détails",
        dailyImg: "/assets/img/daily/sixty-six.png"
      },

      {
        dailyNumber: "Daily Challenge 67",
        dailyTitle: "Ecran “navigation segmentée”",
        dailyImg: "/assets/img/daily/sixty-seven.png"
      },

      {
        dailyNumber: "Daily Challenge 68",
        dailyTitle: "Ecran FM Radio",
        dailyImg: "/assets/img/daily/sixty-eight.png"
      },

      {
        dailyNumber: "Daily Challenge 69",
        dailyTitle: "Ecran boussole",
        dailyImg: "/assets/img/daily/sixty-nine.png"
      },

      {
        dailyNumber: "Daily Challenge 70",
        dailyTitle: "Ecran roue chromatique",
        dailyImg: "/assets/img/daily/seventy.png"
      },

      {
        dailyNumber: "Daily Challenge 71",
        dailyTitle: "Ecran chronomètre",
        dailyImg: "/assets/img/daily/seventy-one.png"
      },

      {
        dailyNumber: "Daily Challenge 72",
        dailyTitle: "Ecran horloge universelle",
        dailyImg: "/assets/img/daily/seventy-two.png"
      },

      {
        dailyNumber: "Daily Challenge 73",
        dailyTitle: "Ecran appel en cours",
        dailyImg: "/assets/img/daily/seventy-three.png"
      },

      {
        dailyNumber: "Daily Challenge 74",
        dailyTitle: "Ecran enregistreur de son",
        dailyImg: "/assets/img/daily/seventy-four.png"
      },

    ]
  },
]


export const service = [
  {
    title: "User Experience",
    content: <>
      Interview utilisateur <br />
      Persona <br />
      User journey <br />
      Brainstorming <br />
      User stories <br />
      Atelier co-conception
    </>
  },

  {
    title: "User Interface",
    content: <>
      Maquette High fidelity <br />
      Design system
    </>
  },

  {
    title: "Integration web",
    content: <>
      HTML <br />
      CSS <br />
      Javascript <br />
      Typescript - débute <br />
      React JS - débute <br />
      TailwindCss - débute
    </>
  },

  {
    title: <> Design graphique </>,
    content: <>
      Création d’identité visuelle <br />
      Retouche photo <br />
      Mise en page print <br />
      Motion-design - débute <br />
    </>
  }
]

export const aboutTools = [
  {
    icon: SiAdobephotoshop,
    label: "Photoshop",
  },
  {
    icon: SiAdobeillustrator,
    label: "Illustrator",
  },
  {
    icon: SiAdobeindesign,
    label: "Indesign",
  },
  {
    icon: SiAdobepremierepro,
    label: "Premiere pro",
  },
  {
    icon: SiAdobeaftereffects,
    label: "After Effect",
  },
  {
    icon: SiFigma,
    label: "Figma",
  }
]

export const devTools = [
  {
    icon: SiHtml5,
    label: "HTML",
  },
  {
    icon: SiCss3,
    label: "CSS",
  },
  {
    icon: SiJavascript,
    label: "Javascript",
  },
  {
    icon: SiReact,
    label: "React JS",
  },
  {
    icon: SiTypescript,
    label: "Typescript - Débute",
  },
  {
    icon: SiNextdotjs,
    label: "Next JS - Débute",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind - Débute",
  }
]

