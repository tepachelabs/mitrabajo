'use client'

import { FC, PropsWithChildren } from 'react'
import { ThemeUIProvider } from 'theme-ui'

import { theme } from '~/default.theme'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeUIProvider theme={ theme }>
      { children }
    </ThemeUIProvider>
  )
}
