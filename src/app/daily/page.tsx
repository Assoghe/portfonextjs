import React from 'react';
import { dailyData } from '../constants/constants';
import Image from 'next/image';
import { Typography } from '../ui/design-system/typography/typography';
import InfoSection from '../[case-study]/_component/InfoSection';
import HeadingSection from '../[case-study]/_component/Heading';

export default function Daily() {
    return (
        <div>
            {dailyData.map((dailyItem, index) => (
                <div key={index}>
                    <HeadingSection
                        title={dailyItem.name}
                        text={dailyItem.description}
                        src={dailyItem.image}
                    />
                    <div className='grid tablet:grid-cols-3 grid-cols-1 gap-9 px-6 tablet:px-40'>
                        {dailyItem.dailyCases.map((dailyCase, subIndex) => (
                            <div key={subIndex}>
                                <Image
                                    className='rounded-md'
                                    src={dailyCase.dailyImg}
                                    alt={`Daily Challenge ${subIndex + 1}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant='h4' component='h4'>
                                    {dailyCase.dailyNumber}
                                </Typography>
                                <Typography variant="body-one" component='p' className='text-neutral-300'>
                                    {dailyCase.dailyTitle}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
