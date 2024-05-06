import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typography } from '../../../ui/design-system/typography/typography';
import { portfolioData } from '../../../constants/constants';

export default function PortfolioSection() {

    const PortfolioItem = ({ name, description, image, id }: { name: string, description: string, image: string, id: number }) => {

        return (
            <div className='mb-8 tablet:mb-56'>
                <Link href={name}>
                    <Image
                        className='rounded-xl drop-shadow-md object-cover w-auto h-[500px] tablet:w-full'
                        src={image}
                        alt={name}
                        width={0}
                        height={0}
                        sizes="100vh"
                        objectFit="cover"
                        objectPosition="center"

                    />
                    <div className='my-4 gap-2 tablet:flex tablet:justify-between tablet:items-center'>
                        <div>
                            <Typography variant='h2' component='h2'>
                                {name}
                            </Typography>
                            <Typography variant="body-one" component='p' className='text-neutral-300'>
                                {description}
                            </Typography>
                        </div>
                        <Typography variant='h4' component='h4' className='text-primary'>
                            Voir l'étude de cas
                        </Typography>
                    </div>
                </Link>
            </div>
        );
    };

    return (
        <div>
            {portfolioData.map(({ name, description, image, id }) => (
                <PortfolioItem key={id} name={name} description={description} image={image} id={id} />
            ))}
        </div>
    );
}
