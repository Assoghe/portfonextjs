'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Divider from '@/app/ui/design-system/divider/divider';
import { Typography } from '@/app/ui/design-system/typography/typography';
import { BlocColor } from '@/app/ui/bloc-color/bloc-color';
import { portfolioData } from '@/app/constants/constants';
import { usePathname } from 'next/navigation';
import { PortfolioType } from '@/app/types/portfo';
import { getPortfolio } from '@/app/utils/getPortfolio';


const CaseStudyTest = () => {
  // State
  const pathname = usePathname();



  //Comportement
  const portfolioToDisplay = getPortfolio(pathname)
  //Affichage
  return (
    <div className='my-56'>
      <div className='tablet:px-52 px-6'>
        <Typography variant='h1' component='h1' className='tablet:w-[440px]'>
          {portfolioToDisplay?.case.descriptionName}
        </Typography>

        <Typography variant='body-two' component='p' className='mb-9 text-neutral-300 '>
          {portfolioToDisplay?.case.descriptionText}
        </Typography>

        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.descriptionImageCover}
          alt={portfolioToDisplay?.case.descriptionText}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto'}}
        />

        <div className='block tablet:flex w-full my-6 tablet:mt-20 tablet:px-52'>
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
      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>



      <div className='block tablet:flex tablet:my-36 tablet:px-52 px-6 my-6'>
        <Typography variant='h3' component='h3' className='mb-1 tablet:mb-9 tablet:mr-9 tablet:w-[440px] '>
          A propos du projet
        </Typography>
        <Typography variant='body-one' component='p' className='w-full'>
          {portfolioToDisplay?.case.aboutText}
        </Typography>
      </div>


      <div className='tablet:my-36 tablet:px-52 tablet-my-16 px-6 mb-9'>
        <div className='grid grid-cols-1 gap-9 w-auto tablet:grid-cols-2 '>
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
      </div>

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>

      <div className='tablet:my-36 tablet:px-52 tablet-my-16 px-6 mb-9'>
        <Typography variant='h3' component='h3' className='mb-1 tablet:mb-9 tablet:mr-9 tablet:w-[440px]'>
          Veille concurrentielle
        </Typography>
        <Typography variant='body-two' component='p' className='w-full'>
          {portfolioToDisplay?.case.veilleText}
        </Typography>
      </div>

      <div className='my-16 tablet:my-36 w-full gap-12 tablet:px-52 px-6'>
        <Image className='rounded-xl drop-shadow-md w-full'
          src={portfolioToDisplay?.case.veille}
          alt={portfolioToDisplay?.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className='block tablet:flex my-16 tablet:my-36 tablet:px-52 px-6'>
        <Typography variant='h3' component='h3' className=' tablet:mr-9 tablet:w-[440px]'>
          Conclusion veille
        </Typography>
        <Typography variant='body-one' component='p' className='w-full'>
          {portfolioToDisplay?.case.veilleConclusion}
        </Typography>
      </div>

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>


      <div className='my-16 tablet:my-36 tablet:px-52'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:mr-9 w-[440px]'>
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

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>

      <div className='my-16 tablet:my-36 tablet:px-52'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='my-16 tablet:w-96 tablet:mr-9 w-[440px]'>
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

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>

      <div className='my-16 tablet:my-36 tablet:px-52 px-6'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='my-16 tablet:w-96 tablet:mr-9 mb-4 w-[440px]'>
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

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>


      <div className='my-16 tablet:my-36 px-6 tablet:px-52'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 mb-4 w-[440px]'>
            {portfolioToDisplay?.case.maquetteHeadingOne}
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.maquetteTextOne}
          </Typography>
        </div>
        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.maquetteImgOne}
          alt={portfolioToDisplay?.case.maquetteHeadingOne}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className='tablet:px-52 tablet:my-36 my-16 px-6'>
        <Divider />
      </div>

      <div className='my-16 tablet:my-36 px-6 tablet:px-52'>
        <div className='block tablet:flex my-16 tablet:my-36'>
          <Typography variant='h3' component='h3' className='tablet:w-96 tablet:mr-9 mb-4 w-[440px]'>
            {portfolioToDisplay?.case.maquetteHeadingTwo}
          </Typography>
          <Typography variant='body-two' component='p' className='w-full'>
            {portfolioToDisplay?.case.maquetteTextTwo}
          </Typography>
        </div>
        <Image className='rounded-xl drop-shadow-md'
          src={portfolioToDisplay?.case.maquetteImgTwo}
          alt={portfolioToDisplay?.case.maquetteHeadingTwo}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Image className='rounded-xl drop-shadow-md'
        src={portfolioToDisplay?.case.footerImg}
        alt={portfolioToDisplay?.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />

      <div className='tablet:px-52 mb-9'>
        <BlocColor className='my-16 tablet:my-36 '
          key={portfolioToDisplay?.id}
          theme='primary'
          title={'Les impacts du projet'}
          content={portfolioToDisplay?.case.conclusionText}
        />
      </div>
    </div >
  );
}


export default CaseStudyTest;