import React from 'react';
import { service } from '../../../constants/constants'
import { Typography } from '../../../ui/design-system/typography/typography';
import { Tag } from '../../../ui/tag/tag';
import { BlocColor } from '../../../ui/bloc-color/bloc-color';

export default function ServicesSection() {
  return (
    <>
    <div className='mt-9'>  
      <Typography variant='h2' component='h2' className='my-3 tablet:my-9'>
        Mes services
      </Typography>
      <Typography variant='h3' component='h3' className='text-neutral-500 mb-3 tablet:mb-6'>
        Soft skills
      </Typography>
      <div className='flex flex-wrap gap-3 tablet:gap-6 mb-9' >
        <Tag variant="outline"> Curiosite</Tag>
        <Tag variant="outline"> Ecoute </Tag>
          <Tag variant="outline"> Autonomie </Tag>

      </div>
</div>
<div className='grid grid-cols-1 gap-4 w-auto tablet:grid-cols-2 desktop:grid-cols-4'>
        {service.map(({ title, content }, index) => (
          <BlocColor
            key={index}
            theme={
              index % 4 === 0
                ? 'one'
                : index % 4 === 1
                  ? 'two'
                  : index % 4 === 2
                    ? 'three'
                    : 'four'
            }
            title={title}
            content={content}
          />
        ))}

</div>
    </>
  )
}
