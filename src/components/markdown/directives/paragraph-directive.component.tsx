'use client'

import { FC, PropsWithChildren } from 'react'
import { Paragraph } from 'theme-ui'

export const ParagraphDirective: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paragraph mb={ 3 }>{ children }</Paragraph>
  )
}
