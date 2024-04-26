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
    <>
      <Typography variant='h1' component='h1'>
        {portfolioToDisplay?.case.descriptionName}
      </Typography>
    </>
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