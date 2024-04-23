import { service } from '@/app/constants/constants'
import { BlocColor } from '@/app/ui/bloc-color/bloc-color'
import { Typography } from '@/app/ui/design-system/typography/typography'
import { Tag } from '@/app/ui/tag/tag'
import React from 'react'

export default function ServicesSection() {
  return (
    <>
    <div className='mt-9'>  
      <Typography variant='h2' component='h2' className='my-9'>
        Mes services
      </Typography>
      <Typography variant='h3' component='h3' className='text-neutral-500 mb-6'>
        Soft skills
      </Typography>
      <div className='flex gap-6 mb-9'>
        <Tag variant="outline"> Curiosite</Tag>
        <Tag variant="outline"> Ecoute </Tag>
        <Tag variant="outline"> Autonomie </Tag>
      </div>
</div>
<div className='grid grid-cols-1 gap-4 w-auto tablet:grid-cols-2 desktop:grid-cols-4'>
  {service.map(({ title, content}, index) => (
    <BlocColor
      key={index}
      theme={index % 2 === 0 ? 'primary' : 'secondary'}
      title={title}
      content={content}
    />
  ))}
</div>
    </>
  )
}
