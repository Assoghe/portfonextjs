import Link from 'next/link';
import React from 'react';
import { Logo } from '../../ui/design-system/logo/logo';
import Image from 'next/image';

interface Props {
  size?: "little" | "medium" | "big" | "bigger";
}

export const LogoComponent = ({
  size = "little",
}: Props) => {
  let logoSize: number;

  switch(size) {
    case "little":
      logoSize = 42;
      break;

    case "medium":
      logoSize = 66;
      break;

    case "big":
      logoSize = 128;
      break;

    case "bigger":
      logoSize = 428;
      break;
  }

  return (
    <div className='{`w-${logoWidth} h-auto`}'>
    <Image src="/assets/img/logo.svg" sizes={size} width={logoSize} height= {logoSize} alt='logo' />
    </div>
  );
};
