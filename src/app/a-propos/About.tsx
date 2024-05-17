import React from 'react';
import { Typography } from '../ui/design-system/typography/typography';
import ServicesSection from '../portfolio/_components/portfolio/ServiceSection';
import Divider from '../ui/design-system/divider/divider';
import { aboutData, aboutTools, devTools } from '../constants/constants';
import IconWithLabel from '../_components/iconComponent/iconComponent';
import TextImgSection from '../[case-study]/_component/TextSection';
import HeadingSection from '../[case-study]/_component/Heading';

const About = () => {
  const { heading, subtitle, image } = aboutData[0];

  return (
    <>
      <HeadingSection
        title={heading}
        text="Sans oublier qui adore boire du café et écouter du métal..."
        src={image}
        alt="About Image"
      />

      <TextImgSection
        title="Qui je suis ?"
        text={subtitle}
      />

      <div className='my-24 mb-40 px-6 tablet:px-44 '>
        <Typography variant='h2' component='h2' className='mb-12'>
          Mes outils utilisés
        </Typography>

        <Typography variant='h4' component='h4' className='mb-9 text-neutral-200'>
          Design
        </Typography>

        <div className='grid grid-cols-2 tablet:grid-cols-7 text-5xl text-neutral-100 mb-6'>
          {aboutTools.map((tool, index) => (
            <IconWithLabel key={index} icon={tool.icon} label={tool.label} />
          ))}
        </div>
        <Typography variant='h4' component='h4' className='mb-9 text-neutral-200'>
          Développement
        </Typography>
        <div className='grid grid-cols-2 tablet:grid-cols-7 text-5xl text-neutral-100'>
          {devTools.map((tool, index) => (
            <IconWithLabel key={index} icon={tool.icon} label={tool.label} />
          ))}
        </div>
        <div className='my-24'>
          <Divider />
        </div>
        <ServicesSection />
      </div>
    </>
  );
};

export default About;
