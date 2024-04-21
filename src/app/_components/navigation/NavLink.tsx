"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href, label, className}: 
    {href:string, label:string, className?:string}) => {

      const pathname = usePathname();


  return (
    <Link href={href} className={`text-neutral-100 hover:text-primary ${className} ${
          pathname === href ? "text-primary" : "text-neutral-100"
        }
    `}>
        {label}
    </Link>
  )
}

export default NavLink
