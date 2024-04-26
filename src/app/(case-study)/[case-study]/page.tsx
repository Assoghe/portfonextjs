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
  console.log('portfolioToDisplay: ', portfolioToDisplay)
  //Affichage
  return (
    <div className='x-12 tablet:px-52 mt-56	'>
      <div>
        <Typography variant='h1' component='h1'>
          {portfolioToDisplay?.case.descriptionName}
        </Typography>

        <Typography variant='body-one' component='p' className='mb-9 text-neutral-300'>
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

        <div className='flex w-full mt-20 mb-9'>
          <div className='w-full'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Client
            </Typography>
            <Typography variant='body-one' component='p'>
              {portfolioToDisplay?.case.infoClient}
            </Typography>
          </div>
          <div className='w-full'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Liens
            </Typography>
            <Typography variant='body-one' component='p'>
              {portfolioToDisplay?.case.infoLiens}
            </Typography>
          </div>
          <div className='w-full'>
            <Typography variant='h6' component='h6' className='text-neutral-300'>
              Mon role
            </Typography>
            <Typography variant='body-one' component='p'>
              {portfolioToDisplay?.case.infoRole}
            </Typography>
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex mt-16 mb-9'>
        <Typography variant='h3' component='h3' className='w-96	mr-9'>
          A propos du projet
        </Typography>
        <Typography variant='body-one' component='p' className='full'>
          {portfolioToDisplay?.case.aboutText}
        </Typography>
      </div>

      <div className='grid grid-cols-1 gap-4 w-auto tablet:grid-cols-2 desktop:grid-cols-4 mb-16 mt-16'>

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

      <div>
        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
            Veille concurrentielle
          </Typography>
          <Typography variant='body-one' component='p' className='full'>
            {portfolioToDisplay?.case.veilleText}
          </Typography>
        </div>

        <div className='grid grid-cols-2 gap-9'>
          <Image className='rounded-xl drop-shadow-md w-1/2'
            src={portfolioToDisplay?.case.veilleImgOne}
            alt={portfolioToDisplay?.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
          />
          <Image className='rounded-xl drop-shadow-md w-1/2'
            src={portfolioToDisplay?.case.veilleImgTwo}
            alt={portfolioToDisplay?.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
            Conclusion veille
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
            {portfolioToDisplay?.case.veilleConclusion}
          </Typography>
        </div>
      </div>


      <Divider />

      <div className='mb-52'>
        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
            Architecture de l'information
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
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

      <div className='mb-52'>
        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
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

      <div className='mb-52'>
        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
            Design system
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
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

      <div className='mb-52'>
        <div className='flex mt-16 mb-36'>
          <Typography variant='h3' component='h3' className='w-96 mr-9'>
            Quelques maquettes réalistes
          </Typography>
          <Typography variant='body-one' component='p' className='w-full'>
            {portfolioToDisplay?.case.maquetteText}
          </Typography>
        </div>


        <div className='grid grid-cols-2 gap-9 items-center my-36	w-full'>
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

        <div className='grid grid-cols-2 gap-9 items-center my-36	w-full'>
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

        <div className='grid grid-cols-2 gap-9 items-center my-36	w-full'>
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

        <div className='grid grid-cols-2 gap-9 items-center my-36	w-full'>
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

      <BlocColor className='my-36'
        key={portfolioToDisplay?.id}
        theme='primary'
        title={'Les impacts du projet'}
        content={portfolioToDisplay?.case.conclusionText}
      />

      <Image className='rounded-xl drop-shadow-md my-36'
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