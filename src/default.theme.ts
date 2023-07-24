'use client'

import type { Theme } from 'theme-ui'

// Colors
const blackColor = '#14171c'
const primaryColor = '#5081F3'
const colorInBetweenOne = '#7a71f9'
const colorInBetweenTwo = '#715df3'
const complementaryColor = '#A671F9'
const textColor = 'rgba(0, 0, 0, 0.6)'
const textInverseColor = 'rgba(255, 255, 255, 0.9)'
const boxShadowColor = 'rgba(0, 0, 0, 0.125)'
const boxShadowInverseColor = 'rgba(255, 255, 255, 0.125)'

export const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: 'system',
  },
  fonts: {
    body: 'var(--inter)',
    heading: 'var(--oswald)',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: textColor,
    background: textInverseColor,
    primary: primaryColor,
    complementary: complementaryColor,
    colorInBetweenOne,
    colorInBetweenTwo,
    linear: `linear-gradient(90deg, ${ primaryColor } 5%, ${ complementaryColor } 100%)`,
    boxShadowColor,
    modes: {
      dark: {
        text: textInverseColor,
        background: blackColor,
        boxShadowColor: boxShadowInverseColor,
      },
    },
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  text: {
    heading: {
      background: `linear-gradient(90deg, ${ primaryColor } 5%, ${ complementaryColor } 100%)`,
      backgroundClip: 'text',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      textFillColor: 'transparent',
      width: 'fit-content',
    },
  },
  cards: {
    primary: {
      border: '1px solid',
      borderColor: 'boxShadowColor',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: 4,
    },
    compact: {
      padding: 1,
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: '500',
      willChange: 'color',
      transition: 'color 0.15s ease-in-out',
      '&:hover': {
        color: 'complementary',
      },
    },
  },
}
