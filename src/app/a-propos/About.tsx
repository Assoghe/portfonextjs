import React from 'react';
import { Typography } from '../ui/design-system/typography/typography';
import ServicesSection from '../portfolio/_components/portfolio/ServiceSection';
import Divider from '../ui/design-system/divider/divider';
import { aboutTools, devTools } from '../constants/constants';
import IconWithLabel from '../_components/iconComponent/iconComponent';

const About = () => {
  return (
    <>
      <div className='mb-52'>
        <Typography variant='h1' component='h1' className='mb-8'>
          Soraya Gherras
        </Typography>
        <Divider />
        <Typography variant='body-one' component='p' className='my-8 text-neutral-200'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus placeat rerum vitae neque       necessitatibus illum eos molestias, deserunt, similique quod voluptate laudantium, perspiciatis esse saepe dignissimos nemo quibusdam perferendis officiis! Ducimus possimus nostrum pariatur eveniet ab. Hic sit suscipit quod enim ea odio dolores rem ad ab architecto ducimus fuga eum asperiores consequuntur, beatae autem laborum laboriosam aliquam fugit numquam.
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

        <div className='grid grid-cols-3 :tablet:grid-cols-7 text-5xl text-neutral-100 gap-3 mb-6'>
          {aboutTools.map((tool, index) => (
            <IconWithLabel key={index} icon={tool.icon} label={tool.label} />
          ))}
        </div>
        <Typography variant='h4' component='h4' className='mb-9 text-neutral-200'>
          Développement
        </Typography>
        <div className='grid grid-cols-3 :tablet:grid-cols-7 text-5xl text-neutral-100 gap-3'>
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
