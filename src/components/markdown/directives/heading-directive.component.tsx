'use client'

import { FC, PropsWithChildren } from 'react'
import { Heading } from 'theme-ui'

const props = {
  mb: [2, 3],
  mt: [3, 4],
}

export const HeadingOneDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h1' sx={ props }>{ children }</Heading>
}

export const HeadingTwoDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h2' sx={ props }>{ children }</Heading>
}

export const HeadingThreeDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h3' sx={ props }>{ children }</Heading>
}

export const HeadingFourDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h4' sx={ props }>{ children }</Heading>
}

export const HeadingFiveDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h5' sx={ props }>{ children }</Heading>
}

export const HeadingSixDirective: FC<PropsWithChildren> = ({ children }) => {
  return <Heading as='h6' sx={ props }>{ children }</Heading>
}

