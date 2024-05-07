'use client'

import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Card, Heading, Link as TuiLink, Paragraph } from 'theme-ui'

interface Props {
  children?: ReactNode;
  content?: string;
}

const styles = {
  card: {
    mb: 4,
    width: '100%',
  },
}

export const InitialContactBanner: FC<Props> = () => {
  return (
    <TuiLink as={ Link } href="/contacto-inicial">
      <Card sx={ styles.card } variant="banner">
        <Heading as="h2" variant="banner">Asesoría Legal Gratuita 🧑‍⚖️</Heading>
        <Paragraph>
          No dejes que las dudas laborales te quiten el sueño.<br/>
          Completa nuestro formulario y un experto se pondrá en contacto contigo.<br/>
          Haz click aquí.
        </Paragraph>
      </Card>
    </TuiLink>
  )
}
