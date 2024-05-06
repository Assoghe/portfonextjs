'use client'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import { LogoComponent } from './LogoComponent'
import { navLinks } from '../../constants/constants'
import { SocialNetworkButtonsWhite } from './social-network-white'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-neutral-800 px-6 tablet:px-44 fixed top-0 left-0 right-0 w-full z-50 bg-neutral-950'>
      <Link href={"/"}>
        <LogoComponent size='little' />
      </Link>

      <nav className='flex items-center gap-12 max-tablet:hidden'>
        <ul className='flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
         <SocialNetworkButtonsWhite/>
        </ul>
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Navbar
