import HeadingSection from "../[case-study]/_component/Heading";
import TextImgSection from "../[case-study]/_component/TextSection";
import { livreBlanc } from "../constants/constants";
import ContactSection from "../contact/ContactSection";
import { BlocColor } from "../ui/bloc-color/bloc-color";
import Divider from "../ui/design-system/divider/divider";
import { Typography } from "../ui/design-system/typography/typography";

function LivreBlancPage() {

  const { heading, subtitle, image, titleContext, titleContextText, problematique, notaBeneTitle, notaBeneText } = livreBlanc[0];

  return (
    <div>


      <HeadingSection
        title={heading}
        text={subtitle}
        src={image}
        alt={heading}
      />


      <TextImgSection
        title= {titleContext}
        text={titleContextText}
      />
      <Typography variant="h2" component="h2" className="px-6 tablet:px-44 ">
        {problematique}
      </Typography>
      <div className='my-24 px-6 tablet:px-44'>
        <Divider />
      </div>
      <div className="px-6 tablet:px-44">
        <BlocColor
          title={notaBeneTitle}
          theme="one"
          content={notaBeneText}
      />
      </div>
  
      
      <ContactSection />
    </div>

  )
}

export default LivreBlancPage;
