'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';
import { Typography } from '@/app/ui/design-system/typography/typography';
import { BlocColor } from '@/app/ui/bloc-color/bloc-color';
import { portfolioData } from '@/app/constants/constants';
import { usePathname } from 'next/navigation';
import { PortfolioType } from '@/app/types/portfo';


const CaseStudyTest = () => {
  // State
  const pathname = usePathname();

  //Comportement
  const portfolioToDisplay = getPortfolio(pathname)
  //Affichage
  return (
    <div className='px-8 tablet:px-52 mt-56	'>
      <div>
        <Typography variant='h1' component='h1' className='tablet:w-[440px]'>
          {portfolioToDisplay?.case.descriptionName}
        </Typography>

        <Typography variant='body-two' component='p' className='mb-9 text-neutral-300 w-full'>
          {portfolioToDisplay?.case.descriptionText}
        </Typography>

        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.image}
          alt={portfolioToDisplay?.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />

        <div className='block tablet:flex w-full mt-20 mb-9'>
          <div className='w-full mb-6'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Client
            </Typography>
            <Typography variant='body-two' component='p'>
              {portfolioToDisplay?.case.infoClient}
            </Typography>
          </div>
          <div className='w-full mb-6'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Liens
            </Typography>
            <Typography variant='body-two' component='p'>
              {portfolioToDisplay?.case.infoLiens}
            </Typography>
          </div>
          <div className='w-full mb-6'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Mon role
            </Typography>
            <Typography variant='body-two' component='p'>
              {portfolioToDisplay?.case.infoRole}
            </Typography>
          </div>
        </div>
      </div>

      <Divider />

      <div className='block tablet:flex my-16 tablet:my-36'>
        <Typography variant='h3' component='h3' className='mb-1 tablet:mb-9 tablet:mr-9 tablet:w-[440px] '>
          A propos du projet
        </Typography>
        <Typography variant='body-one' component='p' className='w-full'>
          {portfolioToDisplay?.case.aboutText}
        </Typography>
      </div>

      <div className='grid grid-cols-1 gap-9 w-auto tablet:grid-cols-2 desktop:grid-cols-4 my-16 tablet:my-36'>

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

      <Divider/>

      <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:mr-9 tablet:w-[440px]'>
            Veille concurrentielle
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.veilleText}
          </Typography>
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 my-16 tablet:my-36 w-full gap-12'>
          <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.veilleImgOne}
            alt={portfolioToDisplay?.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.veilleImgTwo}
            alt={portfolioToDisplay?.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 tablet:w-[440px]'>
            Conclusion veille
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
            {portfolioToDisplay?.case.veilleConclusion}
          </Typography>
      </div>


      <Divider />

      <div className='my-16 tablet:my-36'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 w-[440px]'>
            Architecture de l'information
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.architectureText}
          </Typography>
        </div>
        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.architectureImg}
          alt={portfolioToDisplay?.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Divider />

      <div className='my-16 tablet:my-36'>
        <div className='block tablet:flex mt-16 mb-9'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 w-[440px]'>
            Wireframe
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
            {portfolioToDisplay?.case.wireframeText}
          </Typography>
        </div>
        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.wireframeImg}
          alt={portfolioToDisplay?.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Divider />

      <div className='my-16 tablet:my-36'>
        <div className='block tablet:flex mt-16 mb-9'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 mb-4 w-[440px]'>
            Design system
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.descriptionText}
          </Typography>
        </div>
        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.designsystemImg}
          alt={portfolioToDisplay?.case.designsystemText}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Divider />

      <div className='my-16 tablet:my-36'>
        <div className='block tablet:flex mt-16 mb-9'>
          <Typography variant='h3' component='h3' className='tablet:mr-9 mb-4 tablet:w-[440px]'>
            Quelques maquettes réalistes
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.maquetteText}
          </Typography>
        </div>


        <div className='block tablet:grid tablet:grid-cols-2 gap-9 items-center my-16 tablet:my-36	w-auto'>
          <div className='w-auto'>
            <Typography variant='h4' component='h4'>
              {portfolioToDisplay?.case.maquetteHeadingOne}
            </Typography>
            <Typography variant='body-two' component='p' className="text-neutral-200">
              {portfolioToDisplay?.case.maquetteTextOne}
            </Typography>
          </div>
            <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.maquetteImgOne}
            alt={portfolioToDisplay?.case.maquetteTextOne}
            width={696}
            height={696}
          />
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-9 items-center my-16 tablet:my-36	w-auto'>
          <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.maquetteImgTwo}
            alt={portfolioToDisplay?.case.maquetteTextTwo}
            width={696}
            height={696}
          />
          <div className='w-auto'>
            <Typography variant='h4' component='h4'>
              {portfolioToDisplay?.case.maquetteHeadingTwo}
            </Typography>
            <Typography variant='body-two' component='p' className="text-neutral-200">
              {portfolioToDisplay?.case.maquetteTextTwo}
            </Typography>
          </div>
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-9 items-center my-16 tablet:my-36	w-auto'>
          <div className='w-auto'>
            <Typography variant='h4' component='h4'>
              {portfolioToDisplay?.case.maquetteHeadingThree}
            </Typography>
            <Typography variant='body-two' component='p' className="text-neutral-200">
              {portfolioToDisplay?.case.maquetteTextThree}
            </Typography>
          </div>
          <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.maquetteImgThree}
            alt={portfolioToDisplay?.case.maquetteTextThree}
            width={696}
            height={696}
          />
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-9 items-center my-16 tablet:my-36	w-auto'>
          <Image className='rounded-xl drop-shadow-md w-full'
            src={portfolioToDisplay?.case.maquetteImgFour}
            alt={portfolioToDisplay?.case.maquetteTextFour}
            width={696}
            height={696}
          />
          <div className='w-auto'>
            <Typography variant='h4' component='h4'>
              {portfolioToDisplay?.case.maquetteHeadingFour}
            </Typography>
            <Typography variant='body-two' component='p' className="text-neutral-200">
              {portfolioToDisplay?.case.maquetteTextFour}
            </Typography>
          </div>
        </div>
    </div>

      <BlocColor className='my-16 tablet:my-36'
        key={portfolioToDisplay?.id}
        theme='primary'
        title={'Les impacts du projet'}
        content={portfolioToDisplay?.case.conclusionText}
      />

      <Image className='rounded-xl drop-shadow-md my-16 tablet:my-36'
        src={portfolioToDisplay?.case.footerImg}
        alt={portfolioToDisplay?.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div >
  );
}

export function getPortfolio(pathname: string): PortfolioType {

  const normalizedPathname = pathname.substring(1);

  const portfolioFound = portfolioData.find(portfolio =>
    portfolio.name === normalizedPathname
  );

  return portfolioFound;
}
export default CaseStudyTest;