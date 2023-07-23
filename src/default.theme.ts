'use client'

import type { Theme } from 'theme-ui'

const black = '#14171c'
const primaryColor = '#5081F3'
const complementaryColor = '#A671F9'
const textColor = 'rgba(0, 0, 0, 0.6)'
const textInverseColor = 'rgba(255, 255, 255, 0.9)'

export const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: 'system',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: textColor,
    background: textInverseColor,
    primary: primaryColor,
    complementary: complementaryColor,
    linear: `linear-gradient(90deg, ${ primaryColor } 5%, ${ complementaryColor } 100%)`,
    modes: {
      dark: {
        text: textInverseColor,
        background: black,
      },
    },
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
      willChange: 'color',
      transition: 'color 0.15s ease-in-out',
      '&:hover': {
        color: 'complementary',
      },
    },
  },
}
