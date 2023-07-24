import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ReactNode } from 'react'

import { Providers } from '~/providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--oswald',
})

export const metadata: Metadata = {
  title: '¿Es Legal Mi Trabajo?',
  description: 'Te explicamos tus derechos laborales en México. Aprende a identificar si tu trabajo es legal o no.',
}

export default function RootLayout ({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={ `${ inter.variable } ${ oswald.variable }` }
        style={ {
          margin: 0,
          fontSize: '19px',
        } }>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  )
}
