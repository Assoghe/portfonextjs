import React from 'react';
import { Typography } from '../ui/design-system/typography/typography';
import ServicesSection from '../portfolio/_components/portfolio/ServiceSection';
import Divider from '../ui/design-system/divider/divider';
import { aboutTools, devTools } from '../constants/constants';
import IconWithLabel from '../_components/iconComponent/iconComponent';
import TextImgSection from '../[case-study]/_component/TextSection';

const About = () => {
  return (
    <>
      <div className='mb-40 px-6 tablet:px-44 mt-72'>
        <Typography variant='h1' component='h1' className='mb-8'>
Une designer passionnée et curieuse
</Typography>
        <Divider />
        </div>
        <TextImgSection
          title="Qui je suis ?"
        text="Je suis Soraya, une designer passionnée et étudiante en deuxième année de mastère en design digital. Actuellement, je suis en alternance en tant qu'UX et UI Designer pour une société éditrice et revendeuse de logiciels. Je suis passionnée par le design et j'aime expérimenter et tester de nouveaux outils dans le but de continuer à évoluer dans un domaine qui me passionne énormément. Mon parcours professionnel et scolaire m'a permis d'explorer les différentes facettes du design. Parallèlement à mes études, je me forme également en développement web. Cette démarche vise à approfondir ma compréhension des enjeux techniques associés au développement.
         "
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
