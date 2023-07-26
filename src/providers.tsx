'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { FC, PropsWithChildren } from 'react'
import { ThemeUIProvider } from 'theme-ui'

import { theme } from '~/default.theme'

if (typeof window !== 'undefined') {
  posthog.init(
    process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
      loaded: (posthog) => {
        // Enable debug mode in development
        if (process.env.NODE_ENV === 'development') {
          posthog.opt_out_capturing()
        }
      },
    }
  )
}

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeUIProvider theme={ theme }>
      <PostHogProvider client={ posthog }>
        { children }
      </PostHogProvider>
    </ThemeUIProvider>
  )
}
