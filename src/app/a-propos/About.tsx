import React from 'react';
import { Typography } from '../ui/design-system/typography/typography';
import ServicesSection from '../portfolio/_components/portfolio/ServiceSection';
import Divider from '../ui/design-system/divider/divider';
import { aboutTools, devTools } from '../constants/constants';
import IconWithLabel from '../_components/iconComponent/iconComponent';

const About = () => {
  return (
    <>
      <div className='mb-40'>
        <Typography variant='h1' component='h1' className='mb-8'>
          Soraya Gherras
        </Typography>
        <Divider />
        <Typography variant='body-one' component='p' className='my-8 text-neutral-200'>
          Je suis Soraya, une designer passionnée et étudiante en deuxième année de mastère en design digital. Actuellement, je suis alternante en tant qu'UX et UI Designer pour une société éditrice et revendeuse de logiciels. 

          Dans ce portfolio, je partage avec vous mes projets les plus significatifs, mettant en lumière mon approche créative, mes compétences en conception d'interfaces et mes connaissances en développement web front-end. Chaque projet est le fruit d'une réflexion approfondie sur les besoins des utilisateurs, combinée à une recherche constante d'esthétisme et d'efficacité.

          Je suis convaincue que le design est bien plus qu'une simple esthétique ; c'est un moyen puissant de résoudre des problèmes, d'améliorer des expériences et d'inspirer les utilisateurs. À travers mon portfolio, j'espère vous démontrer ma capacité à allier créativité, rigueur et expertise technique pour créer des solutions innovantes et impactantes.

          Je vous invite à explorer mes réalisations et à découvrir mon approche du design. N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.
        </Typography>

        <Divider />
      </div>

      

      <div className='my-24'>
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
      </div>


      <ServicesSection />
    </>
  );
};

export default About;
