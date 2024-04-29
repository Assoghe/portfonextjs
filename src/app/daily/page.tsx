import React from 'react'
import { dailyData } from '../constants/constants'
import Image from 'next/image'
import { Typography } from '../ui/design-system/typography/typography'

export default function Daily() {
    return (
        <div className='"px-8 tablet:px-52'>
            {
                dailyData.map((dailyItem, index) => (
                    <div className='grid grid-cols-3 gap-9' key={index}>
                        {dailyItem.dailyCases.map((dailyCase, index) => (
                            <div key={index}>
                                <Image className='rounded-md'
                                    src={dailyCase.dailyImg}
                                    alt={`Daily Challenge ${index + 1}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant='h4' component='h4'>{dailyCase.dailyNumber}</Typography>
                                <Typography variant="body-one" component='p' className='text-neutral-300'>{dailyCase.dailyTitle}</Typography>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}
