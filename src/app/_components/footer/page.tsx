import { Typography } from '@/app/ui/design-system/typography/typography'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-primary px-3 tablet:px-52  text-center py-2'>
        <Typography component='p' className='text-neutral-950 text-xs'>
        © Soraya Gherras | Tous droits réservés | Développé avec Next.js, TypeScript et Tailwind.
        </Typography>
    </footer>
  )
}
