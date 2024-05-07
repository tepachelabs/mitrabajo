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

const targetUrl = '/contacto-inicial?utm_source=eslegalmitrabajo.com&utm_campaign=initial-contact-banner'

export const InitialContactBanner: FC<Props> = () => {
  return (
    <TuiLink as={ Link } href={ targetUrl }>
      <Card sx={ styles.card } variant="banner">
        <Heading as="h2" variant="banner">Asesoría Legal Gratuita 🧑‍⚖️</Heading>
        <Paragraph>
          No dejes que las dudas laborales te quiten el sueño.<br/>
          Completa nuestro formulario y un experto se pondrá en contacto contigo.
        </Paragraph>
        <Paragraph>👉 Haz click aquí 👈</Paragraph>
      </Card>
    </TuiLink>
  )
}
