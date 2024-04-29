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
                        <div className="mb-56" key={daily.name}>
                            <div>
                                <Image className='rounded-xl drop-shadow-md'
                                    src={daily.image}
                                    alt={daily.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <Typography variant='h2' component='h2'>{daily.name}</Typography>
                                    <Typography variant="body-one" component='p' className='text-neutral-300'>{daily.description}</Typography>
                                </div>
                                Voir l'étude de cas
                            </div>
                        </div>
                    ))
                }
            </Link>
        </div>
    )
}
