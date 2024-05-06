"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { BsMenuApp } from 'react-icons/bs'
import NavLink from './NavLink'
import { PiPhone } from 'react-icons/pi'
import { LogoComponent } from './LogoComponent';
import { navLinks, socialLinks } from '../../constants/constants';
import { Button } from '../../ui/design-system/button/button';
import { SocialNetworkButtonsWhite } from './social-network-white';
import Divider from '@/app/ui/design-system/divider/divider';


const MobileMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='tablet:hidden'>

      <button className="text-neutral-100 hover:text-primary transition-colors text-5xl"
        onClick={toggleMenu}>
        <HiBars3 />
      </button>

      <div className={`w-full h-full flex flex-col text-neutral-950 bg-neutral-950 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform  px-12 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className='flex w-full items-center justify-between h-20 max-width border-b bg-neutral-950'>
          <Link href={"/"}>
            <LogoComponent size='little' />
          </Link>
          <button className="text-neutral-100 hover:text-primary transition-colors text-5xl" onClick={toggleMenu}>
            <HiMiniXMark />
          </button>
        </div>

        <nav className='flex flex-col items-center justify-center flex-1 gap-10'>
          <ul className='flex items-center flex-col gap-12'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.url} label={link.label} className='text-3xl' />
                </li>
              ))
            }
          <Divider/>

            <SocialNetworkButtonsWhite size="large" />
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default MobileMenu
