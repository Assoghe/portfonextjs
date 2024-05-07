import React from 'react';
import { Typography } from '@/app/ui/design-system/typography/typography';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';

interface HeadingSectionProps {
    title?: string;
    text?: string;
    src: string;
    alt: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, text, src, alt }) => (
    <div className='px-6 tablet:px-44 mt-72'>
        <Typography variant='h1' component='h1'>
            {title}
        </Typography>
        <Typography variant='body-one' component='p' className='mb-12 text-neutral-300'>
            {text}
        </Typography>

        {src && typeof src === 'string' && ( // Vérifiez si src est défini et est une chaîne de caractères
            <Image
                className='rounded-xl drop-shadow-md object-cover w-auto h-[500px] tablet:w-full mb-9'
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="100vh"
                objectFit="cover"
                objectPosition="center"
            />

         
        )}

    </div>
);

export default HeadingSection;