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
    image: "/assets/img/mangasfan.webp",
    id: 1,
    case: {
      descriptionName: "Mangas'Fan",
      descriptionText: "Site d'actualité mangas et animés",
      descriptionImageCover: "/assets/img/mangafanui.png",
      infoClient: "Nom du client",
      infoLiens: "Liens",
      infoRole: "UX Designer UI designer",
      aboutText: "Mangas’Fan est une plateforme web communautaire gérée par des passionnés de mangas et d'animés, qui propose des informations sur l'actualité liée à la japanimation. Dans l’équipe, nous retrouvons le fondateur qui est développeur ainsi que trois autres développeurs et un designer.",
      aboutProbleme: "Arborescence incomplete Design vieillissant Contenu pas à jours Baisse activité du coté de la communauté et du staff Concurrents qui propose du contenu très réguliers",
      aboutSolution: "Par la refonte du site Mangas’Fan, nous souhaitons Améliorer la navigation sur le site internet Offrir de nouvelles fonctionnalités pour fidéliser la communauté Creer un design system pour la maintenance dans le temps du design et harmonisé le site",
      veilleText: "Pour le projet de Mangas’Fan, j'ai effectué une veille. Pour cela, j’ai analysé deux sites : Nautiljon et Hyakanim. Nautiljon est une référence sur l’actualité manga et animé. À côté, nous retrouvons le site Hyakanim, qui est également centré sur l’actualité manga et animé.",
      veille: "/assets/img/usecase/mangasfan/veille.png",
      veilleConclusion: "Suite à cette veille, j’ai pu remarquer que les sites en lien avec les mangas et animés possédaient un design plutôt vieillissant, comme c'est le cas pour Nautiljon. Malgré cela, Nautiljon possède un contenu très complet. Hyakanim est un concurrent plutôt récent, avec comme particularité la possibilité de proposer du contenu manga et animé et de suivre ces derniers grâce à un système de liste. Un des points forts de Hyakanim est son design, à la fois simple et efficace.",
      architectureText: "J’ai redéfini l’architecture de l’information de Mangas’Fan pour permettre une arborescence plus cohérente sur le site. J’ai ajouté une section ‘animés’ et ’mangas’, car une œuvre peut avoir un animé et/ou un manga différents que l’œuvre originale. J’ai également ajouté une section ‘’wiki’’, car j'ai trouvé des fiches sur quelques personnages d'animés lors de ma recherche sur leur site. Durant la refonte, le fondateur a souhaité ajouter une section ‘boutique’. Cette page permettra aux utilisateurs d'acheter des goodies Mangas’Fan. Nous avons aussi prévu une section ‘communauté’, où les utilisateurs peuvent échanger et/ou publier leurs œuvres (dessins, etc.). Enfin, nous avons créé une page de profil avec comme nouveauté la possibilité d'ajouter les mangas et animés possédés par l'utilisateur (mangathèque et animethèque).",
      architectureImg: "/assets/img/usecase/mangasfan/architecture.png",
      wireframeText: "J’ai ensuite réalisé deux wireframes papier : celui de la page d’accueil et celui d’une page type d’animé. Pour moi, ce sont les deux pages principales.",
      wireframeImg: "/assets/img/usecase/mangasfan/wireframe.png",
      designsystemText: "Mangas’Fan ne possédait pas de vrai design system. J’ai donc réalisé en même temps que la refonte un design system dans le but de gagner en homogénéité dans les différentes pages et de permettre de gagner du temps dans la réutilisation des composants. Vous trouverez ici quelques éléments du design system de Mangas’Fan tels que les couleurs, les boutons, les inputs, les cards, etc. Vous pouvez également retrouver le design system complet.",
      designsystemImg: "/assets/img/usecase/mangasfan/design.png",
      maquetteImgOne: "/assets/img/usecase/mangasfan/maquette-one.png",
      maquetteHeadingOne: "Page d’accueil",
      maquetteTextOne: "Dans cette section 'dernières nouveautés' sur la page d’accueil, on peut remarquer qu'on retrouve deux types de cards : une card verticale à gauche et deux cards horizontales à droite. La card à gauche permet de mettre en avant la dernière nouveauté publiée sur le site internet. Les deux cards verticales à droite permettent de mettre en avant deux autres nouveautés.Mangas’Fan possède également des fiches sur les mangas. Cette section sur la page d’accueil permet de mettre en avant les derniers mangas ajoutés sur le site. La section ‘’derniers mangas’wiki’’ reprend l’idée d’une page wiki. Quand on clique sur un des éléments, on retrouve des informations sur des personnages d’un animé et de mangas, ainsi que des éléments propres à l’univers de mangas et animé.",
      maquetteImgTwo: "/assets/img/usecase/mangasfan/maquette-two.png",
      maquetteHeadingTwo: "Page d’accueil - Section 'derniers mangas' et 'derniers mangas’wiki'",
      maquetteTextTwo: "Dans chaque page animé dédiée, on retrouve une section ‘’articles associés’’ qui va permettre de rediriger les utilisateurs vers des articles en lien avec la page animé ou manga qu'ils consultent. Sur la page profil, nous retrouvons une photo de profil ainsi que des informations, ainsi qu'un court texte sur l’utilisateur et ses réseaux sociaux. En bas, nous retrouvons quatre onglets :animés favoris mangas favoris animethèque : (liste des animés regardés, en cours de visionnage, etc.) mangathèque : (liste des mangas regardés, en cours de lecture, etc.)",
      conclusionText: "La refonte du site Mangas'Fan représente une étape importante dans l'amélioration de l'expérience utilisateur. Bien que le projet ne soit pas encore achevés ont peut déjà anticiper plusieurs impacts positifs comme une amélioration de l'expérience utilisateur comme la refonte complete de l'arborescence Mangas'Fan. Il y'a également par la refonte interface,  qui peut avoir un impact positif pour fidéliser de nouveau utilisateur. Ca permet aussi d'avoir un design distinctif comparé à ses concurrents. La création du design system permettra également de plus facilement maintenir d'un point de vue developpement mais également de veiller à une interface  cohérente et harmonieuse pour les utilisateurs dans leur navigation. ",
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
      descriptionImageCover: "/assets/img/usecase/tattoo/cover-tattoo.png",
      infoClient: "MedMax",
      infoLiens: "Liens",
      infoRole: "UX Designer, UI designer",
      aboutText: "Dans le milieu du tatouage, nous retrouvons également une quantité de documents administratifs, notamment des décharges à faire signer aux clients, des documents de traçabilité du matériel, des fiches de soins, etc. C’est sur ces problématiques que deux spécialistes du tatouage ont souhaité travailler avec nous dans l'objectif de créer une application facilitant la gestion d'un salon de tatouage pour les professionnels. Avant le début de mon contrat d'alternance chez Apps Panel, le chef de projet avait déjà avancé sur certains éléments. Il avait réalisé une arborescence et des wireframes pour quelques écrans.",
      aboutProbleme: "Cette partie administrative présente un certain nombre de problèmes pour les tatoueurs professionnels. Perte de temps pour les tatoueurs, qui pourrait être utilisé de manière plus productive. Organisation complexe.Multiples documents à imprimer et à faire signer.",
      aboutSolution: "La création de cette application vise à résoudre ces problèmes en fournissant une interface permettant aux tatoueurs professionnels de gérer leur salon. Les fonctionnalités envisagées incluent : Gestion des fiches clients avec leurs coordonnées et leurs documents (décharges, projets de tatouage des clients, etc.).Planification des rendez-vous.Gestion des décharges et des fiches de soin.",
      veilleText: "Au moment du projet, je n'ai pas trouvé d'applications similaires à celle proposée par le client. J'ai donc exploré la création d'une planche d'ambiance sur l'univers du tatouage dans le but de trouver une esthétique correspondant à l'atmosphère recherchée pour la maquette de l'application mobile.",
      veille: "/assets/img/usecase/tattoo/veille.png",
      veilleConclusion: "Le domaine du tatouage est particulièrement intéressant d'un point de vue visuel. Avec le tatouage imprimé sur la peau, nous obtenons un effet de 'tampon', ce qui confère une dimension artistique unique.",
      architectureText: "Dans le cadre de ce projet, le chef de projet avait déjà réalisé une arborescence du projet. Les éléments suivants sont inclus dans cette arborescence. Accueil. Agenda : permettant au tatoueur d'accéder à son planning et d'ajouter d'autres rendez-vous.Clients : offrant au tatoueur une liste de tous ses clients.Compte : permettant au tatoueur de gérer son salon (logo, nom, décharges, etc.), les mentions légales, la langue, etc.",
      architectureImg: "/assets/img/usecase/tattoo/architecture.png",
      wireframeText: "En m'appuyant sur les wireframes réalisés par le chef de projet, j'ai conçu sur Adobe XD la page d'accueil et une fiche client. La page d'accueil est la première page sur laquelle l'utilisateur arrive. La fiche client regroupe les informations relatives au client, telles que les fiches de soins, le projet de tatouage du client et l'acompte du projet. Une fois les wireframes réalisés, j'ai élaboré des maquettes réalistes présentées ensuite au client.",
      wireframeImg: "/assets/img/usecase/tattoo/wireframe.png",
      designsystemText: "Pendant le projet, nous avons travaillé avec Adobe XD. Au fil du temps, j'ai créé une planche d'assets regroupant les différents composants, icônes ainsi que les typographies utilisées. Cette planche d'assets offre une vue d'ensemble des différents éléments graphiques de l'application.",
      designsystemImg: "/assets/img/usecase/tattoo/design.png",
      maquetteImgOne: "/assets/img/usecase/tattoo/maquette-one.png",
      maquetteHeadingOne: "Page d'accueil et Page 'clients'",
      maquetteTextOne: "Cette page présente deux sections. La première affiche les derniers clients modifiés par l'utilisateur. La seconde partie affiche les '10 prochains rendez-vous', offrant ainsi à l'utilisateur une vue rapide sur ses rendez-vous à venir. Le bouton '+', appelé 'call-to-action', permet à l'utilisateur d'ajouter rapidement un rendez-vous. Cette page présente la liste de tous les clients de l'utilisateur. Le bouton +, permet à l'utilisateur d'ajouter un nouveau client.",
      maquetteImgTwo: "/assets/img/usecase/tattoo/maquette-two.png",
      maquetteHeadingTwo: "Fiche projet d'un client et Page du compte",
      maquetteTextTwo: "Chaque client peut avoir plusieurs projets de tatouage et de piercing. Sur cette page, nous retrouvons un descriptif du projet. En dessous, trois boutons permettent d'accéder au paiement du projet, à la décharge à signer par le client et à la traçabilité des produits utilisés pour le tatouage. Ensuite, une section 'photos' sert de référence visuelle pour l'utilisateur. Enfin, un 'call-to-action' permet d'envoyer la fiche de soin au client par e-mail. Cette page offre différentes catégories : 'Mon salon' : permettant à l'utilisateur de modifier certaines informations liées à son salon, telles que son nom et son logo. 'Mon abonnement' : permettant à l'utilisateur de gérer son abonnement. 'Décharge' et 'fiche de soin' : permettant à l'utilisateur de modifier les modèles fournis par l'application. 'Paramètres' : cette page permet de modifier les informations générales de l'application, telles que la langue.",
      conclusionText: "Deux ans après le lancement de l'application mobile (printemps 2022), Tattoomorrow a généré plusieurs impacts positifs pour les tatoueurs professionnels. Voici les données fournis par le site officiel de Tattoomorrow de ces impacts :Gain de temps (4h)** : Selon le site officiel, un tatoueur gagne environ 4 heures de gestion par semaine grâce à l'utilisation de l'application. La simplification des tâches administratives permet donc  aux tatoueurs de consacrer plus de temps à leur pratique. Réduction de la consommation de papier (11kg)** : L'application a permis de réduire la consommation de papier de 11 kg par an, contribuant ainsi à une approche plus écologique de la gestion du salon de tatouage. Une économie sur l'achat de fournitures par an (225 euros)** : Les tatoueurs économisent en moyenne 225 euros par an sur les fournitures.Réactions positives des utilisateurs** : Les commentaires des utilisateurs qualifient l'application Tattoomorrow de 'must have' pour les tatoueurs professionnels, soulignant son caractère 'indispensable au quotidien'. Ces retours positifs témoignent de l'impact significatif de l'application sur la vie professionnelle des tatoueurs, en termes de gestion, d'efficacité et de satisfaction client.Pour conclure sur ce projet, Tattoomorrow a apporté des avantages significatif en termes de gain de temps, d'économies financières et de réduction de l'empreinte écologique, tout en recevant des éloges de la part de ses utilisateurs pour son utilité et son importance dans leur quotidien professionnel.",
      footerImg: "/assets/img/usecase/tattoo/design-end.png"
    }
  },

  {
    name: "GoodFamily",
    id: 3,
    description: "Application de gestion de budget familiale en utilisant la gamification",
    image: "/assets/img/goodfamily.webp",
    case: {
      descriptionName: "Good Family",
      descriptionText: "Application de gestion de budget familiale en utilisant la gamification",
      descriptionImageCover: "/assets/img/goodfamily.webp",
      infoClient: "Projet d'école",
      infoLiens: "Liens",
      infoRole: "UX Designer UI designer",
      aboutText: "Durant nos cours de gamification, nous devions réaliser en groupe une application mobile sur la gestion de budget familial gamifiée. Nous étions quatre étudiantes sur ce projet.",
      aboutProbleme: " La gestion d'un budget familial pose souvent des difficultés. Un manque de transparence et de visibilité sur les dépenses familiales.Un manque d'outils ludiques pour impliquer tous les membres de la famille dans la gestion budgétaire.Des difficultés à maintenir la motivation et l'engagement dans le suivi régulier des finances familiales.",
      aboutSolution: "Par le biais de la gamification, nous proposons aux utilisateurs :Une expérience ludique adaptée tant aux adultes qu'aux adolescents.Des conseils personnalisés pour les aider à optimiser au mieux leur budget.Des récompenses pour les féliciter lorsqu'ils réussissent un défi.",
      veilleText: "Parmi les applications existantes liées à notre projet, nous avons retenu l'application Bankin. Bankin est une application mobile qui permet de gagner de l'argent grâce au cashback lors des dépenses. Elle permet également de gérer son budget grâce à des alertes personnalisées et à la définition d'objectifs financiers.",
      veille: "/assets/img/usecase/good/veille.png",
      veilleConclusion: "L'application Bankin se distingue principalement par son cashback lors des dépenses, ce qui permet d'avoir une offre très intéressante pour les utilisateurs. On y retrouve aussi comme fonctionnalités un suivi des dépenses, alertes personnalisées, ainsi que des objectifs pour offrir aux utilisateurs des objectifs plus personnels et pertinents sur leur gestion de budget. Un des défauts serait sans doute un manque de gamification sur l'application, surtout qu'avec leurs objectifs ainsi que les récompenses (le cashback). Pour nous, il y aurait la possibilité de pousser plus loin le sujet de la gamification dans leur interface et c'est ce que nous allons faire à travers notre projet d'application de budget familial.",
      architectureText: "Nous avons ensuite élaboré une architecture de l'information.",
      architectureImg: "/assets/img/usecase/good/architecture.png",
      wireframeText: "J'ai réalisé des wireframes des pages principales. La page d'accueil, le calendrier, les défis, le boutique et inventaire. Page d'accueil : cette page permet d'avoir un aperçu des dépenses du mois, des objectifs en cours et des prochaines échéances financières. Calendrier : cette page permet aux utilisateurs de visualiser et de planifier leurs futurs dépenses (éléctricité, anniversaire, etc.). Défi : cette page propose à travers un jeu de plateau des questions sur le budget. À chaque question bien répondu, l'utilisateur gagne des points et peut les utiliser en boutique. Boutique: Sur cette page, les utilisateurs peuvent dépenser leurs points qu'ils ont gagnés pour acheter des bons de réductions sur certains produits et certaines marques. Inventaires : C'est sur cette page que les utilisateurs peuvent utiliser les bons de réductions qu'ils ont achetés.",
      wireframeImg: "/assets/img/usecase/good/wireframe.png",
      designsystemText: "Au fur et à mesure du projet, nous avons trouvé un nom pour notre projet ainsi qu'une mascotte. Le nom de notre application est Good Family, qui permet de faire comprendre aux utilisateurs que c'est une application destinée à une famille. Pour la mascotte, nous avons décidé de prendre le cochon que nous avons appelé Piggy. En effet, cette mascotte fait référence au cochon de la tirelire qui représente le côté 'économie'. Nous avons mis en place un design system, au fur et à mesure du projet, qui comprend différents éléments tels qu'une grille de mise en page, les typographies, les couleurs, des icônes et d'autres composants d'interface réutilisables. Ce design system va nous permettre de garantir une expérience utilisateur harmonieuse et cohérente dans toutes les pages de l'application.",
      designsystemImg: "/assets/img/usecase/good/design.png",
      maquetteImgOne: "/assets/img/usecase/good/maquette-one.png",
      maquetteHeadingOne: "Page d'accueil et Page challenge",
      maquetteTextOne: "Sur cette page d'accueil, sous la forme d'une carte, on retrouve les dépenses du mois. En dessous, nous présentons les 'objectifs', qui sont des défis personnels tels que 'épargner pour une maison'. Cette section permet de suivre l'avancement de ces objectifs. En bas, dans la section 'très bientôt', nous affichons les futures dépenses du mois avec leur date, par exemple, EDF. Sur cette page, l'utilisateur est confronté à un 'plateau de jeu' avec des questions. Ces questions permettent de sensibiliser l'utilisateur à faire des économies (par exemple, des questions sur l'achat d'occasion, etc.). Chaque question réussie permet à l'utilisateur de gagner des points qu'il peut dépenser dans la page 'boutique'.",
      maquetteImgTwo: "/assets/img/usecase/good/maquette-two.png",
      maquetteHeadingTwo: "Page boutique, page inventaire et page calendrier",
      maquetteTextTwo: "Dans la page boutique, l'utilisateur peut dépenser les points gagnés dans les challenges. Nous proposons des bons de réduction pour certains produits et magasins. Une fois un achat effectué, l'utilisateur retrouve ses articles dans la partie 'inventaire', où il peut également les utiliser en caisse grâce à un code-barres. Il a également la possibilité d'ajouter le coupon à son 'wallet'. Dans cette page, l'utilisateur a accès à un calendrier des prochaines dépenses, telles que le paiement mensuel des factures EDF ou un anniversaire. L'objectif est de visualiser les prochains événements de dépenses du mois.",
      conclusionText: "Bien que Good Family soit un projet fictif, on peut envisager quelques impacts financiers sur ce projet :- Une amélioration sur la gestion budgétaire familiale ludique grâce à la gamification.- Grâce à la gamification, on renforce l'engagement et la participation au sein d'une famille.Cela favoriserait également l'échange au sein d'une famille sur le sujet de l'argent et de renforcer les liens familiaux autour d'un objectif commun.- Développer de bonnes habitudes financières des membres de la famille.- Réduction du stress grâce à cette application, en effet une bonne gestion budgétaire permet de réduire le stress financier.",
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
