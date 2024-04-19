import { Button } from '@/app/ui/design-system/button/button'
import React from 'react'
import { HiMail } from "react-icons/hi";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";

function SocialNetwork() {
  return ( <div className="flex gap-3">
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
    
  )
}

export default SocialNetwork
