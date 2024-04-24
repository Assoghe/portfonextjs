import React from 'react'
import { Typography } from '../../ui/design-system/typography/typography';
import Image from 'next/image';
import Divider from '../../ui/design-system/divider/divider';
import { BlocColor } from '../../ui/bloc-color/bloc-color';

interface Props {
    name?: string;
    description?: string;
    image?: string;
    id?: number;
    descriptionName: string;
    descriptionText: string;
    descriptionImageCover: string;
    infoClient: string;
    infoLiens: string;
    infoRole: string;
    aboutText: string;
    aboutProbleme: string;
    aboutSolution: string;
    veilleText: string;
    veilleImgOne: string;
    veilleImgTwo: string;
    veilleConclusion: string;
    architectureText: string;
    architectureImg: string;
    wireframeText: string;
    wireframeImg: string;
    designsystemText: string;
    designsystemImg: string;
    maquetteText: string;
    maquetteImgOne: string;
    maquetteHeadingOne: string;
    maquetteTextOne: string;
    maquetteImgTwo: string;
    maquetteHeadingTwo: string;
    maquettetteTextTwo: string;
    maquetteImgThree: string;
    maquetteHeadingThree: string;
    maquettetteTextThree: string;
    maquetteImgFour: string;
    maquetteHeadingFour: string;
    maquettetteTextFour: string;
    conclusionText: string;
    footerImg: string;
}

const CaseStudy: any = ({index,descriptionName, descriptionText, descriptionImageCover, infoClient, infoLiens, infoRole, aboutText, aboutProbleme, aboutSolution, veilleText, veilleImgOne, veilleImgTwo, veilleConclusion, architectureText, architectureImg, wireframeText, wireframeImg, designsystemText, designsystemImg, maquetteText, maquetteHeadingOne, maquetteTextOne, maquetteImgOne, maquetteImgTwo,maquetteHeadingTwo, maquetteTextTwo, maquetteImgThree, maquetteHeadingThree, maquetteTextThree, maquetteImgFour, maquetteHeadingFour,maquetteTextFour, conclusionText, footerImg}) => {
    return (
        <>
            <Typography variant='h1' component='h1'>
                {descriptionName}
            </Typography>
            <Typography variant='body-one' component='p'>
                {descriptionText}
            </Typography>
            <Image
            src={descriptionImageCover}
            alt={descriptionText}
            />

            <div className='flex'>
                <div>
                <Typography variant='h6' component='h6'>
                    Client
                </Typography>    
                <Typography variant='body-one' component='p'>
                    {infoClient}
                </Typography>
                </div>
                <div>
                <Typography variant='h6' component='h6'>
                    Liens
                </Typography>    
                <Typography variant='body-one' component='p'>
                    {infoLiens}
                </Typography>
                </div>
                <div>
                <Typography variant='h6' component='h6'>
                    Mon role
                </Typography>    
                <Typography variant='body-one' component='p'>
                    {infoRole}
                </Typography>
                </div>
            </div>

            <Divider/>

            <div className='flex'>
            <Typography variant='h3' component='h3'>
                A propos du projet
            </Typography>
            <Typography variant="body-one" component='p'>
                {aboutText}
            </Typography>
            </div>
            
            <div className='flex'>
                <BlocColor
                    key={index}
                    theme="primary"
                    title={aboutProbleme}
                    content={aboutProbleme}
                />
                <BlocColor
                    key={index}
                    theme="secondary"
                    title={aboutSolution}
                    content={aboutSolution}
                />
            </div>

            <Divider/>

            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Veille concurrentielle
            </Typography>
            <Typography variant="body-one" component='p'>
                {veilleText}
            </Typography>
            </div>

            <div className='flex'>
                <Image
                src={veilleImgOne}
                alt={veilleImgOne}
                />
                <Image
                src={veilleImgTwo}
                alt={veilleImgTwo}
                />
            </div>

            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Conclusion de la veille concurrentielle
            </Typography>
            <Typography variant="body-one" component='p'>
                {veilleConclusion}
            </Typography>
            </div>

            <Divider/>
            <div className='gap-4'>
            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Architecture de l'information
            </Typography>
            <Typography variant="body-one" component='p'>
                {architectureText}
            </Typography>
            </div>
            <Image
                src={architectureImg}
                alt={architectureImg}
                />
            </div>

            <Divider/>

            <div className='gap-4'>
            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Wireframe
            </Typography>
            <Typography variant="body-one" component='p'>
                {wireframeText}
            </Typography>
            </div>
            <Image
                src={wireframeImg}
                alt={wireframeImg}
                />
            </div>

            <Divider/>

            <div className='gap-4'>
            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Design system
            </Typography>
            <Typography variant="body-one" component='p'>
                {designsystemText}
            </Typography>
            </div>
            <Image
                src={designsystemImg}
                alt={designsystemImg}
                />
            </div>

            <Divider/>

            <div className='gap-4'>
            <div className='flex'>
            <Typography variant='h3' component='h3'>
                Quelques maquettes réalistes
            </Typography>
            <Typography variant="body-one" component='p'>
                {maquetteText}
            </Typography>
            </div>
            
            <div>
                <Image
                src={maquetteImgOne}
                alt={maquetteImgOne}
                />
                <div>
                <Typography variant='h3'component='h3'>
                    {maquetteHeadingOne}
                </Typography>
                <Typography variant='body-one' component='p'>
                    {maquetteTextOne}
                </Typography>
                </div>
            </div>

            <div>
                <Image
                src={maquetteImgTwo}
                alt={maquetteImgTwo}
                />
                <div>
                <Typography variant='h3'component='h3'>
                    {maquetteHeadingTwo}
                </Typography>
                <Typography variant='body-one' component='p'>
                    {maquetteTextTwo}
                </Typography>
                </div>
            </div>

            <div>
                <Image
                src={maquetteImgThree}
                alt={maquetteImgThree}
                />
                <div>
                <Typography variant='h3'component='h3'>
                    {maquetteHeadingThree}
                </Typography>
                <Typography variant='body-one' component='p'>
                    {maquetteTextThree}
                </Typography>
                </div>
            </div>

            <div>
                <Image
                src={maquetteImgFour}
                alt={maquetteImgFour}
                />
                <div>
                <Typography variant='h3'component='h3'>
                    {maquetteHeadingFour}
                </Typography>
                <Typography variant='body-one' component='p'>
                    {maquetteTextFour}
                </Typography>
                </div>
            </div>
            </div>

            <Divider/>

            <BlocColor
                    key={index}
                    theme="primary"
                    title="Les impacts du projets"
                    content={conclusionText}
                />

            <Image
                src={footerImg}
                alt={footerImg}
                />

        </>
    )
}

export default CaseStudy;