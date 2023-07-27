'use client'

import { FC, PropsWithChildren } from 'react'
import { Box } from 'theme-ui'

const styles = {
  ol: {
    pl: 4,
    pb: 3,
    listStyleType: 'decimal',

    li: {
      listStyleType: 'inherit',
    },
  },
}

export const OrderedListDirective: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box as='ol' sx={ styles.ol }>
      { children }
    </Box>
  )
}
