import React from 'react';
import { Typography } from '@/app/ui/design-system/typography/typography';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';

interface TextImgSectionProps {
  title?: string;
  text?: string;
  src?: string;
  alt?: string;
}

const TextImgSection: React.FC<TextImgSectionProps> = ({ title, text, src, alt }) => (
  <div className='px-6 tablet:px-52'>
    <div className='tablet:flex'>
      <Typography variant='h3' component='h3' className='tablet:mr-9 tablet:w-[440px] '>
        {title}
      </Typography>
      <Typography variant='body-one' component='p' className='w-full'>
        {text}
      </Typography>
    </div>
    <Image className='my-12'
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
    <div className='my-24'>
      <Divider />
    </div>
  </div>
);

export default TextImgSection;
