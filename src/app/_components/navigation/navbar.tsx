"use client"
import Link from 'next/link'
import React from 'react'
import { navLinks, socialLinks } from '@/app/constants/constants'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import { Button } from '@/app/ui/design-system/button/button'
import { LogoComponent } from './LogoComponent'



const Navbar = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-neutral-800 px-12 tablet:px-52'>
      <Link href={"/"}>
          <LogoComponent size='little'/>
      </Link>

    <nav className='flex items-center gap-12 max-tablet:hidden'>
        <ul className='flex items-center gap-8'>
            {
                navLinks.map((link, index)=>(
                    <li key={index}>
                        <NavLink href={link.url} label={link.label}/>
                    </li>
                ))
            }
            {
                socialLinks.map((icon, index, key)=>(
                    <Button
                    key={index}
                    icon={icon}
                    iconTheme="neutral"
                    size="medium"
                    variant="ico"
                  />
                ))
            }
        </ul>
    </nav>
            <MobileMenu/>
    </header>
  )
}

export default Navbar
