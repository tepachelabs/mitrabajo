'use client'

import { FC, PropsWithChildren } from 'react'
import { Box } from 'theme-ui'

const styles = {
  ul: {
    pl: [3, 4],
    pb: 3,
  },
}

export const UnorderedListDirective: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box as='ul' sx={ styles.ul }>
      { children }
    </Box>
  )
}
