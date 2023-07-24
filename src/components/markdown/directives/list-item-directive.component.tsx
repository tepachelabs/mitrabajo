'use client'

import { FC, ReactNode } from 'react'
import { Box } from 'theme-ui'

interface Props {
  children?: ReactNode
  decoration?: string;
}

const styles = {
  li: (decoration: string) => ({
    fontFamily: 'body',
    listStyleType: `"${ decoration }"`,
    paddingInlineStart: '1ch',
    '&::marker': {
      color: 'primary',
      fontWeight: 'bold',
    },
  }),
}

export const ListItemDirective: FC<Props> = ({ children, decoration = '●' }) => {
  return (
    <Box as='li' sx={ styles.li(decoration) }>
      { children }
    </Box>
  )
}
