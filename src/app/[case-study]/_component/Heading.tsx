import React from 'react';
import { Typography } from '@/app/ui/design-system/typography/typography';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface HeadingSectionProps {
    title?: string;
    text?: string;
    src?: string | StaticImport;
    alt?: string | StaticImport;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, text, src, alt }) => (
    <div className='px-6 tablet:px-40 mt-72'>
        <Typography variant='h1' component='h1'>
            {title}
        </Typography>
        <Typography variant='body-one' component='p' className='mb-12 text-neutral-300'>
            {text}
        </Typography>

        {src && (
            <Image
                className='mt-9 mb-20 rounded-xl drop-shadow-md'
                src={src}
                alt={alt || ''}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        )}

    </div>
);

export default HeadingSection;
