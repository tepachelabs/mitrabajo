'use client'

import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Flex, Grid, Heading, Link as TuiLink, Paragraph, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  children: ReactNode
  title?: string;
  showGoHome?: boolean;
}

const styles: Record<string, ThemeUIStyleObject> = {
  grid: {
    alignItems: 'center',
    gridTemplateAreas: `
      "header"
      "body"
      "footer"
    `,
    maxWidth: '960px',
    margin: '0 auto',
    p: 3,
    pt: 0,
  },
  header: {
    alignItems: 'center',
    flexDirection: ['column', 'row'],
    gap: [4, 3],
    gridArea: 'header',
    justifyContent: 'space-between',
    pb: 3,
    pt: 3,
  },
  nav: {
    gap: 4,
    justifyContent: ['center', 'flex-end'],
    width: ['100%', 'auto'],
  },
  body: {
    gridArea: 'body',
    gridGap: 0,
    pb: 5,
    width: '100%',
  },
  heading: {
    background: 'linear',
    borderRadius: 8,
    color: 'background',
    fontSize: 5,
    padding: 3,
    textAlign: 'center',
    textFillColor: 'inherit',
  },
  link: {
    fontSize: '0.9rem',
    letterSpacing: '0.8px',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  backLink: {
    pt: 3,
  },
  footer: {
    borderTop: '1px solid',
    borderColor: 'boxShadowColor',
    pb: 4,
    pt: 4,
  },
}

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Artículos', href: '/articulos' },
  { label: 'LFT', href: '/ley-federal-del-trabajo' },
]

export const Page: FC<Props> = ({ children, showGoHome, title }) => {
  return (
    <Grid sx={ styles.grid }>
      <Flex sx={ styles.header }>
        <Heading as='span' sx={ styles.heading }>¿Es Legal mi Trabajo? 🤔</Heading>

        <Flex as='nav' sx={ styles.nav }>
          { navItems.map((item) => (
            <TuiLink key={ item.href } as={ Link } href={ item.href } sx={ styles.link }>
              { item.label }
            </TuiLink>
          )) }
        </Flex>
      </Flex>

      <Grid sx={ styles.body }>
        { title && <Heading as='h1' mb={ 4 }>{ title }</Heading> }
        { children }
        { showGoHome && <TuiLink as={ Link } href='/' sx={ styles.backLink }>Regresar a Inicio 🏠</TuiLink> }
      </Grid>

      <Flex as='footer' sx={ styles.footer }>
        <Paragraph>Copyright &copy; 2023 TepacheLabs</Paragraph>
      </Flex>
    </Grid>
  )
}
