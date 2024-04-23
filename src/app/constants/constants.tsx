import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


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
                    descriptionImageCover: "../src/assets/img/mangafanui.png",
                    infoClient: "Nom du client",
                    infoLiens: "Liens",
                    infoRole: "UX Designer UI designer",
                    aboutText: "Mangas’Fan est une plateforme web communautaire gérée par des passionnés de mangas et d'animés, qui propose des informations sur l'actualité liée à la japanimation. Dans l’équipe, nous retrouvons le fondateur qui est développeur ainsi que trois autres développeurs et un designer.",
                    aboutProbleme: " -  Arborescence incomplète : L'organisation du site manque de clarté, ce qui rend la navigation difficile pour les utilisateurs. Design vieillissant : L'apparence du site est dépassée et ne correspond plus aux normes esthétiques actuelles, ce qui peut influencer négativement l'attrait des visiteurs. Contenu pas à jour : Le manque de mises à jour régulières diminue la pertinence et l'engagement des utilisateurs. Baisse d'activité du côté de la communauté et du staff : La participation des membres de la communauté ainsi que l'implication du personnel diminuent, ce qui peut affecter la dynamique du site. Concurrents proposant un contenu très régulier : La présence de concurrents offrant un contenu mis à jour de manière fréquente accentue la pression sur Mangas’Fan pour maintenir sa compétitivité.",
                    aboutSolution: "Par la refonte du site Mangas’Fan, nous souhaitons Améliorer la navigation sur le site internet Offrir de nouvelles fonctionnalités pour fidéliser la communauté Creer un design system pour la maintenance dans le temps du design et harmonisé le site",
                    veilleText: "Pour le projet de Mangas’Fan, j'ai effectué une veille. Pour cela, j’ai analysé deux sites : Nautiljon et Hyakanim. Nautiljon est une référence sur l’actualité manga et animé. À côté, nous retrouvons le site Hyakanim, qui est également centré sur l’actualité manga et animé.", 
                    veilleImgOne: "../src/assets/img/usecase/mangasfan/veille-one.png",
                    veilleImgTwo: "../src/assets/img/usecase/mangasfan/veille-two.png",
                    veilleConclusion: "Suite à cette veille, j’ai pu remarquer que les sites en lien avec les mangas et animés possédaient un design plutôt vieillissant, comme c'est le cas pour Nautiljon. Malgré cela, Nautiljon possède un contenu très complet. Hyakanim est un concurrent plutôt récent, avec comme particularité la possibilité de proposer du contenu manga et animé et de suivre ces derniers grâce à un système de liste. Un des points forts de Hyakanim est son design, à la fois simple et efficace.",
                    architectureText: "J’ai redéfini l’architecture de l’information de Mangas’Fan pour permettre une arborescence plus cohérente sur le site. J’ai ajouté une section ‘animés’ et ’mangas’, car une œuvre peut avoir un animé et/ou un manga différents que l’œuvre originale. J’ai également ajouté une section ‘’wiki’’, car j'ai trouvé des fiches sur quelques personnages d'animés lors de ma recherche sur leur site. Durant la refonte, le fondateur a souhaité ajouter une section ‘boutique’. Cette page permettra aux utilisateurs d'acheter des goodies Mangas’Fan. Nous avons aussi prévu une section ‘communauté’, où les utilisateurs peuvent échanger et/ou publier leurs œuvres (dessins, etc.). Enfin, nous avons créé une page de profil avec comme nouveauté la possibilité d'ajouter les mangas et animés possédés par l'utilisateur (mangathèque et animethèque).",
                    architectureImg: "../src/assets/img/usecase/mangasfan/architecture.png",
                    wireframeText: "J’ai ensuite réalisé deux wireframes papier : celui de la page d’accueil et celui d’une page type d’animé. Pour moi, ce sont les deux pages principales.",
                    wireframeImg: "../src/assets/img/usecase/mangasfan/wireframe.png",
                    designsystemText: "Mangas’Fan ne possédait pas de vrai design system. J’ai donc réalisé en même temps que la refonte un design system dans le but de gagner en homogénéité dans les différentes pages et de permettre de gagner du temps dans la réutilisation des composants. Vous trouverez ici quelques éléments du design system de Mangas’Fan tels que les couleurs, les boutons, les inputs, les cards, etc. Vous pouvez également retrouver le design system complet.",
                    designsystemImg: "../src/assets/img/usecase/mangasfan/design.png",
                    maquetteText: "Dans cette section, vous retrouverez quelques parties des maquettes que j’ai réalisées pour Mangas’Fan.",
                    maquetteImgOne: "../src/assets/img/usecase/mangasfan/maquette-one.png",
                    maquetteHeadingOne: "Page d’accueil - Section 'dernière actualité'",
                    maquetteTextOne: "Dans cette section 'dernières nouveautés' sur la page d’accueil, on peut remarquer qu'on retrouve deux types de cards : une card verticale à gauche et deux cards horizontales à droite. La card à gauche permet de mettre en avant la dernière nouveauté publiée sur le site internet. Les deux cards verticales à droite permettent de mettre en avant deux autres nouveautés.",
                    maquetteImgTwo: "../src/assets/img/usecase/mangasfan/maquette-two.png",
                    maquetteHeadingTwo: "Page d’accueil - Section 'derniers mangas' et 'derniers mangas’wiki'",
                    maquetteTextTwo: "Mangas’Fan possède également des fiches sur les mangas. Cette section sur la page d’accueil permet de mettre en avant les derniers mangas ajoutés sur le site. La section ‘’derniers mangas’wiki’’ reprend l’idée d’une page wiki. Quand on clique sur un des éléments, on retrouve des informations sur des personnages d’un animé et de mangas, ainsi que des éléments propres à l’univers de mangas et animé.",
                    maquetteImgThree: "../src/assets/img/usecase/mangasfan/maquette-three.png",
                    maquetteHeadingThree: "Page animé - Articles associés",
                    maquetteTextThree: "Dans chaque page animé dédiée, on retrouve une section ‘’articles associés’’ qui va permettre de rediriger les utilisateurs vers des articles en lien avec la page animé ou manga qu'ils consultent.                    ",
                    maquetteImgFour: "../src/assets/img/usecase/mangasfan/maquette-four.png",
                    maquetteHeadingFour: "Page profil",
                    maquetteTextFour: "Sur la page profil, nous retrouvons une photo de profil ainsi que des informations, ainsi qu'un court texte sur l’utilisateur et ses réseaux sociaux. En bas, nous retrouvons quatre onglets :animés favoris mangas favoris animethèque : (liste des animés regardés, en cours de visionnage, etc.) mangathèque : (liste des mangas regardés, en cours de lecture, etc.)",
                    conclusionText: "La refonte du site Mangas'Fan représente une étape importante dans l'amélioration de l'expérience utilisateur. Bien que le projet ne soit pas encore achevés ont peut déjà anticiper plusieurs impacts positifs comme une amélioration de l'expérience utilisateur comme la refonte complete de l'arborescence Mangas'Fan. Il y'a également par la refonte interface,  qui peut avoir un impact positif pour fidéliser de nouveau utilisateur. Ca permet aussi d'avoir un design distinctif comparé à ses concurrents. La création du design system permettra également de plus facilement maintenir d'un point de vue developpement mais également de veiller à une interface  cohérente et harmonieuse pour les utilisateurs dans leur navigation. ",
                    footerImg: "../src/assets/img/usecase/mangasfan/design-end.png"
        }
    },

    {
        name: "Tattoomorrow",
        description: "Application de gestion pour les tatoueurs",
        image: "/assets/img/tattoomorrow.webp",
        id: 2,
            case: {
                    descriptionName: "Tattoomorrow",
                    descriptionText: "Application de gestion pour les tatoueurs",
                    descriptionImageCover: "../src/assets/img/usecase/tattoo/cover-tattoo.png",
                    infoClient: "MedMax",
                    infoLiens: "Liens",
                    infoRole: "UX Designer, UI designer",
                    aboutText: "Dans le milieu du tatouage, nous retrouvons également une quantité de documents administratifs, notamment des décharges à faire signer aux clients, des documents de traçabilité du matériel, des fiches de soins, etc. C’est sur ces problématiques que deux spécialistes du tatouage ont souhaité travailler avec nous dans l'objectif de créer une application facilitant la gestion d'un salon de tatouage pour les professionnels. Avant le début de mon contrat d'alternance chez Apps Panel, le chef de projet avait déjà avancé sur certains éléments. Il avait réalisé une arborescence et des wireframes pour quelques écrans.",
                    aboutProbleme: "Cette partie administrative présente un certain nombre de problèmes pour les tatoueurs professionnels. Perte de temps pour les tatoueurs, qui pourrait être utilisé de manière plus productive. Organisation complexe.Multiples documents à imprimer et à faire signer.",
                    aboutSolution: "La création de cette application vise à résoudre ces problèmes en fournissant une interface permettant aux tatoueurs professionnels de gérer leur salon. Les fonctionnalités envisagées incluent : Gestion des fiches clients avec leurs coordonnées et leurs documents (décharges, projets de tatouage des clients, etc.).Planification des rendez-vous.Gestion des décharges et des fiches de soin.",
                    veilleText: "Au moment du projet, je n'ai pas trouvé d'applications similaires à celle proposée par le client. J'ai donc exploré la création d'une planche d'ambiance sur l'univers du tatouage dans le but de trouver une esthétique correspondant à l'atmosphère recherchée pour la maquette de l'application mobile.", 
                    veilleImgOne: "../src/assets/img/usecase/tattoo/veille-img-one-tattoo.png",
                    veilleImgTwo: "../src/assets/img/usecase/tattoo/veille-img-two-tattoo.png",
                    veilleConclusion: "Le domaine du tatouage est particulièrement intéressant d'un point de vue visuel. Avec le tatouage imprimé sur la peau, nous obtenons un effet de 'tampon', ce qui confère une dimension artistique unique.",
                    architectureText: "Dans le cadre de ce projet, le chef de projet avait déjà réalisé une arborescence du projet. Les éléments suivants sont inclus dans cette arborescence. Accueil. Agenda : permettant au tatoueur d'accéder à son planning et d'ajouter d'autres rendez-vous.Clients : offrant au tatoueur une liste de tous ses clients.Compte : permettant au tatoueur de gérer son salon (logo, nom, décharges, etc.), les mentions légales, la langue, etc.",
                    architectureImg: "../src/assets/img/usecase/tattoo/architecture-tattoo.png",
                    wireframeText: "En m'appuyant sur les wireframes réalisés par le chef de projet, j'ai conçu sur Adobe XD la page d'accueil et une fiche client. La page d'accueil est la première page sur laquelle l'utilisateur arrive. La fiche client regroupe les informations relatives au client, telles que les fiches de soins, le projet de tatouage du client et l'acompte du projet. Une fois les wireframes réalisés, j'ai élaboré des maquettes réalistes présentées ensuite au client.",
                    wireframeImg: "../src/assets/img/usecase/tattoo/architecture-tattoo.png",
                    designsystemText: "Pendant le projet, nous avons travaillé avec Adobe XD. Au fil du temps, j'ai créé une planche d'assets regroupant les différents composants, icônes ainsi que les typographies utilisées. Cette planche d'assets offre une vue d'ensemble des différents éléments graphiques de l'application.",
                    designsystemImg: "../src/assets/img/usecase/tattoo/tattoodesignsystem-tattoo.png",
                    maquetteText: "Dans cette section, vous trouverez quelques pages des maquettes que j'ai réalisées pour Tattoomorrow.",
                    maquetteImgOne: "../src/assets/img/usecase/tattoo/maquette-one-tattoo.png",
                    maquetteHeadingOne: "Page d'accueil ",
                    maquetteTextOne: "Cette page présente deux sections. La première affiche les derniers clients modifiés par l'utilisateur. La seconde partie affiche les '10 prochains rendez-vous', offrant ainsi à l'utilisateur une vue rapide sur ses rendez-vous à venir. Le bouton '+', appelé 'call-to-action', permet à l'utilisateur d'ajouter rapidement un rendez-vous.",
                    maquetteImgTwo: "../src/assets/img/usecase/tattoo/maquette-two-tattoo.png",
                    maquetteHeadingTwo: "Page client",
                    maquetteTextTwo: "Cette page présente la liste de tous les clients de l'utilisateur. Le bouton "+", permet à l'utilisateur d'ajouter un nouveau client.",
                    maquetteImgThree: "../src/assets/img/usecase/tattoo/maquette-three-tattoo.png",
                    maquetteHeadingThree: "Fiche projet d'un client",
                    maquetteTextThree: "Chaque client peut avoir plusieurs projets de tatouage et de piercing. Sur cette page, nous retrouvons un descriptif du projet. En dessous, trois boutons permettent d'accéder au paiement du projet, à la décharge à signer par le client et à la traçabilité des produits utilisés pour le tatouage. Ensuite, une section 'photos' sert de référence visuelle pour l'utilisateur. Enfin, un 'call-to-action' permet d'envoyer la fiche de soin au client par e-mail.",
                    maquetteImgFour: "../src/assets/img/usecase/tattoo/maquette-four-tattoo.png",
                    maquetteHeadingFour: "Page du compte",
                    maquetteTextFour: "Cette page offre différentes catégories : 'Mon salon' : permettant à l'utilisateur de modifier certaines informations liées à son salon, telles que son nom et son logo. 'Mon abonnement' : permettant à l'utilisateur de gérer son abonnement. 'Décharge' et 'fiche de soin' : permettant à l'utilisateur de modifier les modèles fournis par l'application. 'Paramètres' : cette page permet de modifier les informations générales de l'application, telles que la langue.",
                    conclusionText: "Deux ans après le lancement de l'application mobile (printemps 2022), Tattoomorrow a généré plusieurs impacts positifs pour les tatoueurs professionnels. Voici les données fournis par le site officiel de Tattoomorrow de ces impacts :Gain de temps (4h)** : Selon le site officiel, un tatoueur gagne environ 4 heures de gestion par semaine grâce à l'utilisation de l'application. La simplification des tâches administratives permet donc  aux tatoueurs de consacrer plus de temps à leur pratique. Réduction de la consommation de papier (11kg)** : L'application a permis de réduire la consommation de papier de 11 kg par an, contribuant ainsi à une approche plus écologique de la gestion du salon de tatouage. Une économie sur l'achat de fournitures par an (225 euros)** : Les tatoueurs économisent en moyenne 225 euros par an sur les fournitures.Réactions positives des utilisateurs** : Les commentaires des utilisateurs qualifient l'application Tattoomorrow de 'must have' pour les tatoueurs professionnels, soulignant son caractère 'indispensable au quotidien'. Ces retours positifs témoignent de l'impact significatif de l'application sur la vie professionnelle des tatoueurs, en termes de gestion, d'efficacité et de satisfaction client.Pour conclure sur ce projet, Tattoomorrow a apporté des avantages significatif en termes de gain de temps, d'économies financières et de réduction de l'empreinte écologique, tout en recevant des éloges de la part de ses utilisateurs pour son utilité et son importance dans leur quotidien professionnel.",
                    footerImg: "../src/assets/img/usecase/tattoo/footer-tattoo.png"
        }
    },

        {
            name: "Good Family",
            id: 3,
            description: "Application de gestion de budget familiale en utilisant la gamification",
            image: "/assets/img/goodfamily.webp",
                case: {
                        descriptionName: "Good Family",
                        descriptionText: "Application de gestion de budget familiale en utilisant la gamification",
                        descriptionImageCover: "../src/assets/img/usecase/good/cover-good.png",
                        infoClient: "Projet d'école",
                        infoLiens: "Liens",
                        infoRole: "UX Designer UI designer",
                        aboutText: "Durant nos cours de gamification, nous devions réaliser en groupe une application mobile sur la gestion de budget familial gamifiée. Nous étions quatre étudiantes sur ce projet.",
                        aboutProbleme: <> {"La gestion d'un budget familial pose souvent des difficultés comme :"} <br/> {"- Un manque de transparence et de visibilité sur les dépenses familiales."} <br/> {"- Un manque d'outils ludiques pour impliquer tous les membres de la famille dans la gestion budgétaire."} <br/> {"- Des difficultés à maintenir la motivation et l'engagement dans le suivi régulier des finances familiales."}</>,
                        aboutSolution: <> {"Par le biais de la gamification, nous proposons aux utilisateurs :"} <br/> {"- Une expérience ludique adaptée tant aux adultes qu'aux adolescents."} <br/> {"- Des conseils personnalisés pour les aider à optimiser au mieux leur budget."} <br/> {"- Des récompenses pour les féliciter lorsqu'ils réussissent un défi."}</>,
                        veilleText: "Parmi les applications existantes liées à notre projet, nous avons retenu l'application Bankin. Bankin est une application mobile qui permet de gagner de l'argent grâce au cashback lors des dépenses. Elle permet également de gérer son budget grâce à des alertes personnalisées et à la définition d'objectifs financiers.", 
                        veilleImgOne: "../src/assets/img/usecase/good/veille-img-one.png",
                        veilleImgTwo: "../src/assets/img/usecase/good/veille-img-two.png",
                        veilleConclusion: "L'application Bankin se distingue principalement par son cashback lors des dépenses, ce qui permet d'avoir une offre très intéressante pour les utilisateurs. On y retrouve aussi comme fonctionnalités un suivi des dépenses, alertes personnalisées, ainsi que des objectifs pour offrir aux utilisateurs des objectifs plus personnels et pertinents sur leur gestion de budget. Un des défauts serait sans doute un manque de gamification sur l'application, surtout qu'avec leurs objectifs ainsi que les récompenses (le cashback). Pour nous, il y aurait la possibilité de pousser plus loin le sujet de la gamification dans leur interface et c'est ce que nous allons faire à travers notre projet d'application de budget familial.",
                        architectureText: "Nous avons ensuite élaboré une architecture de l'information.",
                        architectureImg: "../src/assets/img/usecase/good/architecture-good.png",
                        wireframeText: "J'ai réalisé des wireframes des pages principales. La page d'accueil, le calendrier, les défis, le boutique et inventaire. Page d'accueil : cette page permet d'avoir un aperçu des dépenses du mois, des objectifs en cours et des prochaines échéances financières. Calendrier : cette page permet aux utilisateurs de visualiser et de planifier leurs futurs dépenses (éléctricité, anniversaire, etc.). Défi : cette page propose à travers un jeu de plateau des questions sur le budget. À chaque question bien répondu, l'utilisateur gagne des points et peut les utiliser en boutique. Boutique: Sur cette page, les utilisateurs peuvent dépenser leurs points qu'ils ont gagnés pour acheter des bons de réductions sur certains produits et certaines marques. Inventaires : C'est sur cette page que les utilisateurs peuvent utiliser les bons de réductions qu'ils ont achetés.",
                        wireframeImg: "../src/assets/img/usecase/good/wireframe-good.png",
                        designsystemText: "Au fur et à mesure du projet, nous avons trouvé un nom pour notre projet ainsi qu'une mascotte. Le nom de notre application est Good Family, qui permet de faire comprendre aux utilisateurs que c'est une application destinée à une famille. Pour la mascotte, nous avons décidé de prendre le cochon que nous avons appelé Piggy. En effet, cette mascotte fait référence au cochon de la tirelire qui représente le côté 'économie'. Nous avons mis en place un design system, au fur et à mesure du projet, qui comprend différents éléments tels qu'une grille de mise en page, les typographies, les couleurs, des icônes et d'autres composants d'interface réutilisables. Ce design system va nous permettre de garantir une expérience utilisateur harmonieuse et cohérente dans toutes les pages de l'application.",
                        designsystemImg: "../src/assets/img/usecase/good/designsystem-good.png",
                        maquetteText: "Dans cette section, vous trouverez quelques pages des maquettes que j'ai réalisées pour Good Family.",
                        maquetteImgOne: "../src/assets/img/usecase/good/maquette-one-good.png",
                        maquetteHeadingOne: "Page d'accueil",
                        maquetteTextOne: "Sur cette page d'accueil, sous la forme d'une carte, on retrouve les dépenses du mois. En dessous, nous présentons les 'objectifs', qui sont des défis personnels tels que 'épargner pour une maison'. Cette section permet de suivre l'avancement de ces objectifs. En bas, dans la section 'très bientôt', nous affichons les futures dépenses du mois avec leur date, par exemple, EDF.",
                        maquetteImgTwo: "../src/assets/img/usecase/good/maquette-two-good.png",
                        maquetteHeadingTwo: "Challenge",
                        maquetteTextTwo: "Sur cette page, l'utilisateur est confronté à un 'plateau de jeu' avec des questions. Ces questions permettent de sensibiliser l'utilisateur à faire des économies (par exemple, des questions sur l'achat d'occasion, etc.). Chaque question réussie permet à l'utilisateur de gagner des points qu'il peut dépenser dans la page 'boutique'.",
                        maquetteImgThree: "../src/assets/img/usecase/good/maquette-three-good.png",
                        maquetteHeadingThree: "Page boutique et inventaire",
                        maquetteTextThree: "Dans la page boutique, l'utilisateur peut dépenser les points gagnés dans les challenges. Nous proposons des bons de réduction pour certains produits et magasins. Une fois un achat effectué, l'utilisateur retrouve ses articles dans la partie 'inventaire', où il peut également les utiliser en caisse grâce à un code-barres. Il a également la possibilité d'ajouter le coupon à son 'wallet'",
                        maquetteImgFour: "../src/assets/img/usecase/good/maquette-four-good.png",
                        maquetteHeadingFour: "Page calendrier",
                        maquetteTextFour: "Dans cette page, l'utilisateur a accès à un calendrier des prochaines dépenses, telles que le paiement mensuel des factures EDF ou un anniversaire. L'objectif est de visualiser les prochains événements de dépenses du mois.",
                        conclusionText: <>{"Bien que Good Family soit un projet fictif, on peut envisager quelques impacts financiers sur ce projet :"} <br/> {"- Une amélioration sur la gestion budgétaire familiale ludique grâce à la gamification."} <br/> {"-  Grâce à la gamification, on renforce l'engagement et la participation au sein d'une famille."} <br/> {"- Cela favoriserait également l'échange au sein d'une famille sur le sujet de l'argent et de renforcer les liens familiaux autour d'un objectif commun."} <br/> {"- Développer de bonnes habitudes financières des membres de la famille."} <br/> {"- Réduction du stress grâce à cette application, en effet une bonne gestion budgétaire permet de réduire le stress financier."}</>,
                        footerImg: "../src/assets/img/usecase/good/footer-good.png"
            }
        },
  ]

  export const service = [
    {
      title: <> User <br/> Experience </>,
      content: <>
        Interview utilisateur <br/>
        Persona <br/>
        User journey <br/>
        Brainstorming <br/>
        User stories <br/>
        Atelier co-conception
      </>
    },

    {
      title: <>User <br/> Interface</>,
      content: <>
        Maquette High fidelity <br/>
        Design system
      </>
    },

    {
      title: <> Integration  <br/>web</>,
      content: <>
        HTML <br/>
        CSS <br/>
        Javascript <br/>
        Typescript - débute <br/>
        React JS - débute <br/>
        TailwindCss - débute
      </>
    },

    {
      title: <> Design <br/> graphique </>,
      content: <>
        Création d’identité visuelle <br/>
        Retouche photo <br/>
        Mise en page print <br/>
        Motion-design - débute <br/>
      </>
    }
  ]

