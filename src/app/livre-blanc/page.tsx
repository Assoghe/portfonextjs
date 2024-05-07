import TextImgSection from "../[case-study]/_component/TextSection";
import ContactSection from "../contact/ContactSection";
import { BlocColor } from "../ui/bloc-color/bloc-color";
import Divider from "../ui/design-system/divider/divider";
import { Typography } from "../ui/design-system/typography/typography";

function LivreBlancPage() {
  return (
    <div>
      <div className='px-6 tablet:px-44 mt-72'>
        <Typography variant='h1' component='h1'>
          Livre Blanc
        </Typography>
        <Typography variant='body-one' component='p' className='mb-12 text-neutral-300'>
          Dans le cadre de mon mastère j'ai l'opportunité de réalisé un livre blanc
        </Typography>
        <div className='my-24'>
          <Divider />
        </div>
      </div>

      <TextImgSection
        title="Le contexte"
        text="La création de sites internet est devenue essentielle pour les entreprises. Malheureusement, l'intégration de maquettes peut également présenter de nombreux défis tant pour les designers que pour les développeurs. Il est donc nécessaire pour eux de collaborer de manière transparente afin de créer des sites à la fois 'implémentables' et esthétiques, leur permettant ainsi de se démarquer de la concurrence. On remarque qu'un fossé existe souvent entre le design et son implémentation.
        Beaucoup d'UI designers juniors créent des maquettes qui ne sont pas facilement intégrables. Elles comportent parfois des éléments trop complexes, tels que des animations trop poussées, ce qui peut rendre leur implémentation en code difficile et peu compréhensible pour tous les navigateurs. De plus, elles ne répondent pas toujours aux normes d'accessibilité, telles que le contraste, ou de performance, mesurée par des outils tels que Lighthouse.Parallèlement, les développeurs, soumis à des contraintes de temps, ne développent pas toujours de manière 'pixel perfect'. On observe souvent des écarts entre une maquette et son implémentation, ce qui peut être frustrant pour le travail du designer."
      />
      <Typography variant="h2" component="h2" className="px-6 tablet:px-44 ">
        Comment intégrer efficacement une maquette web tout en affrontant les défis liés au développement web ?
      </Typography>
      <div className='my-24 px-6 tablet:px-44'>
        <Divider />
      </div>
      <div className="px-6 tablet:px-44">
        <BlocColor
        title ="Important: Ce livre blanc est en cours de rédaction"
        theme="primary"
          content="Ce livre blanc est en cours de rédaction et sera terminé à l'été 2024. N'hésitez pas à me suivre ou à me contacter si vous êtes intéressé par ce livre blanc."
      />
      </div>
  
      
      <ContactSection />
    </div>

  )
}

export default LivreBlancPage;
