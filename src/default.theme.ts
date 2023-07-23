'use client'

import type { Theme } from 'theme-ui'

const primaryColor = '#5081F3'
const complementaryColor = '#A671F9'
const textColor = 'rgba(0, 0, 0, 0.6)'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: textColor,
    background: '#fff',
    primary: primaryColor,
    complementary: complementaryColor,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      background: `linear-gradient(90deg, ${ primaryColor } 5%, ${ complementaryColor } 100%)`,
      backgroundClip: 'text',
      fontFamily: 'heading',
      textFillColor: 'transparent',
      width: 'fit-content',
    },
  },
  styles: {
    a: {
      color: 'primary',
      fontWeight: '500',
      '&:hover': {
        color: 'complementary',
      },
    },
  },
}
