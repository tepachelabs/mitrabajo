'use client'

import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { Box, Card, Flex, Link as TuiLink, Paragraph, ThemeUIStyleObject } from 'theme-ui'

const source = 'https://www.dof.gob.mx/nota_detalle.php?codigo=5711066&fecha=12/12/2023#gsc.tab=0'

const baseStyles: ThemeUIStyleObject = {
  opacity: 0.95,
  transform: 'scale(0.97)',
  transformOrigin: '50% 50%',
  transition: 'opacity 120ms ease, transform 120ms ease',
}

const hoverStyles: ThemeUIStyleObject = {
  cursor: 'pointer',
  opacity: 1,
  transform: 'scale(1)',
}

const squareStyles: ThemeUIStyleObject = {
  borderRadius: 3,
  display: 'inline-block',
  height: '1rem',
  mr: 3,
  width: '1rem',
}

const styles: Record<string, ThemeUIStyleObject> = {
  blue: {
    'polygon': {
      ...baseStyles,
      fill: 'primary',
    },
    '&:hover polygon': hoverStyles,
  },
  purple: {
    'polygon': {
      ...baseStyles,
      fill: 'complementary',
    },
    '&:hover polygon': hoverStyles,
  },
  container: {
    position: 'relative',
  },
  legend: {
    flexDirection: ['column', 'row'],
    gap: 3,
    my: 3,
  },
  purpleSquare: {
    backgroundColor: 'complementary',
    ...squareStyles,
  },
  blueSquare: {
    backgroundColor: 'primary',
    ...squareStyles,
  },
}

export const MinimumWageMapDirective: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box my={ 3 } sx={ styles.container }>
      <Flex sx={ styles.legend }>
        <Card variant='compact'>
          <Paragraph>
            <Box as='span' sx={ styles.purpleSquare }/>
            Zona Libre: <b>$374.89</b>
          </Paragraph>
        </Card>
        <Card variant='compact'>
          <Paragraph>
            <Box as='span' sx={ styles.blueSquare }/>
            Resto del país: <b>$248.93</b>
          </Paragraph>
        </Card>
      </Flex>

      <svg id="minimum-wage-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 908.12 597.22">
        <Box as='g' sx={ styles.purple }>
          <Box
            as='polygon'
            // @ts-ignore
            points="593.16 224.63 586.67 266.63 569.76 262.27 558.06 237.34 542.8 239.89 506.17 219.54 482.77 182.4 484.81 154.43 462.43 138.66 456.32 150.36 439.54 151.37 442.08 179.86 422.75 185.46 382.05 136.62 340.85 110.17 335.76 86.26 307.79 64.39 278.79 82.7 210.12 90.33 185.19 79.14 167.9 81.68 159.25 98.98 135.19 99.98 123.64 77.61 128.22 55.74 75.32 44.04 81.42 90.33 129.24 144.25 137.57 167.05 101.77 179.35 71.95 175.01 68.7 172.23 89.05 163.07 96.17 143.74 66.16 118.31 44.79 105.08 37.16 72.02 16.31 46.58 5.63 15.55 74.81 10.47 180.11 51.16 266.07 52.69 267.6 36.41 320.5 37.94 368.32 78.63 376.46 107.63 419.19 126.45 433.43 100.51 468.53 100.51 491.93 122.89 521.94 168.16 536.19 207.84 593.16 224.63"
          />
        </Box>
        <Box as='g' sx={ styles.blue }>
          <Box
            as='polygon'
            // @ts-ignore
            points="219.27 285.67 236.06 307.54 213.68 329.41 201.47 300.93 170.95 275.49 150.6 271.93 150.6 254.13 155.69 233.27 118.05 201.73 107.36 205.3 71.95 175.01 101.77 179.35 137.57 167.05 138.9 170.7 173.49 208.35 198.42 264.81 204.01 284.14 219.27 285.67"
          />
          <Box
            as='polygon'
            // @ts-ignore
            points="897.35 361.97 897.35 388.42 878.02 417.42 873.44 462.69 855.64 462.69 837.33 484.56 780.36 486.09 782.9 504.4 767.64 506.44 794.6 535.43 756.96 542.55 743.73 564.94 746.27 586.81 673.53 540.52 618.08 559.85 521.94 521.7 457.85 479.48 441.57 483.04 410.03 472.86 395.28 447.94 362.21 438.78 340.34 403.17 361.71 392.49 358.15 368.07 340.85 348.24 338.82 327.38 276.25 272.95 275.23 252.6 235.04 237.85 238.6 212.93 230.47 199.7 218.26 201.23 196.38 171.72 182.14 164.09 148.06 124.92 135.19 99.98 159.25 98.98 167.9 81.68 185.19 79.14 210.12 90.33 278.79 82.7 307.79 64.39 335.76 86.26 340.85 110.17 382.05 136.62 422.75 185.46 442.08 179.86 439.54 151.37 456.32 150.36 462.43 138.66 484.81 154.43 482.77 182.4 506.17 219.54 542.8 239.89 558.06 237.34 569.76 262.27 586.67 266.63 576.88 329.92 594.18 390.46 634.87 452.52 664.88 459.64 674.04 473.37 739.15 456.08 765.09 464.73 767.64 448.96 787.99 433.7 782.39 416.91 797.14 413.86 795.11 378.76 897.35 361.97"
          />
        </Box>
      </svg>

      <Box>
        <Paragraph>
          Fuente: <TuiLink as={ Link } href={ source } target='_blank' rel="noopener noreferrer">
          Diario Oficial de la Federación (DOF) resolución de salarios mínimos para 2024
          </TuiLink>
        </Paragraph>
      </Box>
    </Box>
  )
}
