import React from "react"
import { Container } from "../../ui/container/container"
import { Logo } from "../../ui/design-system/logo/logo"
import { Typography } from "../../ui/design-system/typography/typography"
import { Button } from "../../ui/design-system/button/button"
import { HiMail } from "react-icons/hi";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import Link from "next/link"

interface Props {

}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-1 border-neutral-700 bg-neutral-950">
        <Container className="flex items-center justify-between px-60 py-3 gap-12">
          <Link href="/">
            <div>
              <Logo size="little"/>
            </div>
          </Link>
          <div className="flex items-center gap-7">
            <Typography variant="h4" component="div" className="flex items-center gap-7">
                <Link href="/"> Portfolio </Link>
                <Link href="/a-propos"> A propos </Link>
                <Link href="/livreblanc"> Livre blanc </Link>
                <Link href="contact"> Contact </Link>
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