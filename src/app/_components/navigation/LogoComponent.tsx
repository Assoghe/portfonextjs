import { Logo } from '@/app/ui/design-system/logo/logo'
import Link from 'next/link'
import React from 'react'

function LogoComponent() {
  return (
    <Link href="/">
      <Logo
        size='little'
      />
    </Link>
  )
}

export default LogoComponent

