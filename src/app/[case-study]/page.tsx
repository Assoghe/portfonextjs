'use client'
import React from 'react';
import Divider from '@/app/ui/design-system/divider/divider';
import { usePathname } from 'next/navigation';
import { getPortfolio } from '@/app/utils/getPortfolio';
import TextSection from './_component/TextSection';
import Image from 'next/image';
import { BlocColor } from '../ui/bloc-color/bloc-color';
import HeadingSection from './_component/Heading';
import InfoSection from './_component/InfoSection';

const CaseStudy = () => {
    const pathname = usePathname();
    const portfolioToDisplay = getPortfolio(pathname);


    return (
        <div className='mb-56'>
            <HeadingSection
                title={portfolioToDisplay?.case.descriptionName}
                text={portfolioToDisplay?.case.descriptionText}
                src={portfolioToDisplay?.case.descriptionImageCover}
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
                title="Veille Concurrentiel"
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
            <div className='my-16 tablet:my-36 px-6 tablet:px-40'>
               <BlocColor
                title="Les impacts du projet"
                content={portfolioToDisplay?.case.conclusionText}
            /> 
            </div>
            
        </div>



    );
}

export default CaseStudy;
