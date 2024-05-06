'use client'
import React from 'react'
import { Typography } from '../ui/design-system/typography/typography'
import { Button } from '../ui/design-system/button/button'
import { socialLinks } from '../constants/constants'
import { LogoComponent } from '../_components/navigation/LogoComponent'
import { SocialNetworkButtons } from '../_components/navigation/social-networks-buttons'

const ContactSection = () => {
  return (
    <div className='flex items-center  flex-col my-56'>
      <LogoComponent size="bigger" />
      <Typography variant='h2' component='h2' className='my-36 text-center'>
        Intéressée par mon profil ? N’hésitez pas à me contacter !
      </Typography>

      <div className='flex flex-wrap items-center justify-center flex-1 gap-10'>
        <SocialNetworkButtons theme='accent'/>
      </div>


    </div>
  )
}

export default ContactSection
