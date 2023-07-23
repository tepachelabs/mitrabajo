'use client'

import { FC, PropsWithChildren } from 'react'
import { Link } from 'theme-ui'

export const AnchorDirective: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Link mb={ 3 } { ...props }>{ children }</Link>
  )
}
