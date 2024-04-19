import Link from 'next/link'
import React from 'react'
import { Logo } from '../../ui/design-system/logo/logo'

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

