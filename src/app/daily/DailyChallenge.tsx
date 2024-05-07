import Link from 'next/link'
import React from 'react'
import { dailyData } from '../constants/constants'
import Image from 'next/image'
import { Typography } from '../ui/design-system/typography/typography'

export const DailyChallenge = () => {
    return (
        <div>
            <Link href="/daily" className='text-primary'>
                {
                    dailyData.map((daily) => (
                        <div className="my-24 tablet:mb-56'" key={daily.name}>
                            <div>
                                <Image className='rounded-xl drop-shadow-md object-cover w-auto h-[500px] tablet:w-full'
                                    src={daily.image}
                                    alt={daily.name}
                                    width={0}
                                    height={0}
                                    sizes="100vh"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                            <div className="my-4 tablet:gap-2 tablet:flex tablet:justify-between tablet:items-center">
                                <div>
                                    <Typography variant='h2' component='h2' className='mb-1'>{daily.name}</Typography>
                                    <Typography variant="body-one" component='p' className='text-neutral-30 0 mb-6'>{daily.description}</Typography>
                                </div>
                                <Typography variant='h4' component='h4' className='text-primary'>
                                    Voir l'étude de cas
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </Link>
        </div>
    )
}
