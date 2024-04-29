export type PortfolioType = {
    id: number;
    name: string;
    description: string;
    image: string;
    case: CaseStudyType;
} | undefined | any

type CaseStudyType = {
    descriptionName?: string;
    descriptionText?: string;
    descriptionImageCover?: string;
    infoClient?: string;
    infoLiens?: string;
    infoRole?: string;
    aboutText?: string;
    aboutProbleme?: string;
    aboutSolution?: string;
    veilleText?: string;
    veilleImgOne?: string;
    veilleImgTwo?: string;
    veilleConclusion?: string;
    architectureText?: string;
    architectureImg?: string;
    wireframeText?: string;
    wireframeImg?: string;
    designsystemText?: string;
    designsystemImg?: string;
    maquetteText?: string;
    maquetteImgOne?: string;
    maquetteHeadingOne?: string;
    maquetteTextOne?: string;
    maquetteImgTwo?: string;
    maquetteHeadingTwo?: string;
    maquetteTextTwo?: string;
    maquetteImgThree?: string;
    maquetteHeadingThree?: string;
    maquetteTextThree?: string;
    maquetteImgFour?: string;
    maquetteHeadingFour?: string;
    maquetteTextFour?: string;
    conclusionText?: string;
    footerImg?: string;
} | undefined | any