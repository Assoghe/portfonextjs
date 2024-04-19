import { Typography } from '@/app/ui/design-system/typography/typography'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'


function NavbarRight() {

 const pathname = usePathname()


  return (

    <Typography variant="h4" component="div" className="flex max-lg:block">
                <div className="flex items-left gap-7  max-lg:flex-col">
                <Link  className={`link ${pathname === '/' ? 'active text-primary' : ''}`} href="/"> Portfolio </Link>
                <Link className={`link ${pathname === '/a-propos' ? 'active text-primary'  : ''}`} href="/a-propos"> A propos </Link>
                <Link className={`link ${pathname === '/livreblanc' ? 'active text-primary' : ''}`} href="/livreblanc">Livre blanc </Link>
                <Link className={`link ${pathname === '/contact' ? 'active text-primary' : ''}`} href="/contact"> Contact </Link>
                </div>
            </Typography>

            




  )
}

export default NavbarRight
