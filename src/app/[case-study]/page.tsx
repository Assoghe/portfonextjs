'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { getPortfolio } from '@/app/utils/getPortfolio';
import TextSection from './_component/TextSection';
import Image from 'next/image';
import { BlocColor } from '../ui/bloc-color/bloc-color';
import HeadingSection from './_component/Heading';
import InfoSection from './_component/InfoSection';
import { Typography } from '../ui/design-system/typography/typography';
import Divider from '../ui/design-system/divider/divider';

const CaseStudy = () => {
    const pathname = usePathname();
    const portfolioToDisplay = getPortfolio(pathname);

    return (
        <div className='mb-56'>
            <HeadingSection
                title={portfolioToDisplay?.case.descriptionName}
                text={portfolioToDisplay?.case.descriptionText}
                src={portfolioToDisplay?.case.descriptionImageCover}
                alt={portfolioToDisplay?.case.descriptionName}
            />

            <InfoSection
                nameClient='Client'
                client={portfolioToDisplay?.case.infoClient}
                nameTool='Outil(s)'
                tool={portfolioToDisplay?.case.infoLiens}
                nameRole='Role(s)'
                role={portfolioToDisplay?.case.infoRole}
            />

            <TextSection
                title="A propos du projet"
                text={portfolioToDisplay?.case.aboutText}/>
            <div className='grid grid-cols-1 gap-9 w-auto tablet:grid-cols-2 px-6 tablet:px-40 my-24'>

                    <BlocColor
                        key={portfolioToDisplay?.id}
                        theme='primary'
                        title={'Probleme'}
                        content={portfolioToDisplay?.case.aboutProbleme}
                    />

                    <BlocColor
                        key={portfolioToDisplay?.id}
                        theme='secondary'
                        title={'Solution'}
                        content={portfolioToDisplay?.case.aboutSolution}
                    />
                </div>

            


            <TextSection
                title="Veille Concurrentielle"
                text={portfolioToDisplay?.case.veilleText}
                src={portfolioToDisplay?.case.veille}
            />

            <TextSection
                title="Architecture de l'information"
                text={portfolioToDisplay?.case.architectureText}
                src={portfolioToDisplay?.case.architectureImg}
            />
            <TextSection
                title="Wireframes"
                text={portfolioToDisplay?.case.wireframeText}
                src={portfolioToDisplay?.case.wireframeImg}
            />
            <TextSection
                title="Design System"
                text={portfolioToDisplay?.case.designsystemText}
                src={portfolioToDisplay?.case.designsystemImg}
            />
            <TextSection
                title={portfolioToDisplay?.case.maquetteHeadingOne}
                text={portfolioToDisplay?.case.maquetteTextOne}
                src={portfolioToDisplay?.case.maquetteImgOne}
            />
            <TextSection
                title={portfolioToDisplay?.case.maquetteHeadingTwo}
                text={portfolioToDisplay?.case.maquetteTextTwo}
                src={portfolioToDisplay?.case.maquetteImgTwo}
            />
            <Image
                src={portfolioToDisplay?.case.footerImg}
                alt={portfolioToDisplay?.case.descriptionName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />

            <div className=' bg-primary rounded-xl p-9 my-12 mx-6 tablet:mx-40 '>
                <Typography variant='h4' component='h4' className='text-neutral-950'>Les impacts du projet</Typography>
                <Divider/>
                <ul>
                    {portfolioToDisplay?.case.conclusionText.split('-').map((item: string, index: React.Key | null | undefined) => (
                        <div className='mt-4 text-neutral-950 text-lg w-full' key={index}><li> - {item.trim()}</li> <br /></div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CaseStudy;
