'use client'

import React from "react"
import { Container } from "../../ui/container/container"
import { Logo } from "../../ui/design-system/logo/logo"
import { Typography } from "../../ui/design-system/typography/typography"
import { Button } from "../../ui/design-system/button/button"
import { HiMail } from "react-icons/hi";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {

}

export const Navigation = ({}: Props) => {

  const pathname = usePathname()

  return (
    <div className="border-b-1 border-neutral-700 bg-neutral-950">
        <Container className="flex items-center justify-between px-64 py-3 gap-12">
          <Link href="/">
            <div>
              <Logo size="little"/>
            </div>
          </Link>
          <div className="flex items-center gap-7">
            <Typography variant="h4" component="div" className="flex items-center gap-7">
                <Link  className={`link ${pathname === '/' ? 'active text-primary' : ''}`} href="/"> Portfolio </Link>
                <Link className={`link ${pathname === '/a-propos' ? 'active text-primary'  : ''}`} href="/a-propos"> A propos </Link>
                <Link className={`link ${pathname === '/livreblanc' ? 'active text-primary' : ''}`} href="/livreblanc">Livre blanc </Link>
                <Link className={`link ${pathname === '/contact' ? 'active text-primary' : ''}`} href="/contact"> Contact </Link>
            </Typography>

            <div className="flex items-center gap-5">
              <Button
                icon={{icon: FaGithub}}
                iconTheme="neutral"
                size="medium"
                variant="ico"
              />

              <Button
                icon={{icon: FaBehance}}
                iconTheme="neutral"
                size="medium"
                variant="ico"
              />

              <Button
                icon={{icon: FaLinkedin}}
                iconTheme="neutral"
                size="medium"
                variant="ico"
              />

              <Button
                icon={{icon: HiMail}}
                iconTheme="neutral"
                size="medium"
                variant="ico"
              />
            </div>

          </div>
        </Container>
    </div>
  )
}