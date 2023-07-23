'use client'

import { Property } from 'csstype'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Flex, Grid, Heading, Link as TuiLink, ThemeUIStyleObject } from 'theme-ui'

type FlexDirection = Property.FlexDirection

interface Props {
  children: ReactNode
  title?: string;
  showGoHome?: boolean;
}

const styles: Record<string, ThemeUIStyleObject> = {
  grid: {
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-between',
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
  },
  heading: {
    background: 'linear',
    color: 'background',
    padding: 3,
    borderRadius: 8,
    textAlign: 'center',
    textFillColor: 'inherit',
  },
  link: {
    fontSize: '0.9rem',
    letterSpacing: '0.8px',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
}

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Artículos', href: '/articles' },
]

export const Page: FC<Props> = ({ children, showGoHome, title }) => {
  return (
    <Grid sx={ styles.grid }>
      <Flex sx={ styles.header }>
        <Heading as='h1' sx={ styles.heading }>¿Es Legal mi Trabajo? 🤔</Heading>

        <Flex as='nav' sx={ styles.nav }>
          { navItems.map((item) => (
            <TuiLink key={ item.href } as={ Link } href='/' sx={ styles.link }>
              { item.label }
            </TuiLink>
          )) }
        </Flex>
      </Flex>

      <Grid sx={ styles.body }>
        { title && <Heading as='h2' mb={ 4 }>{ title }</Heading> }
        { children }
        { showGoHome && <TuiLink as={ Link } href='/'>Regresar a Inicio 🏠</TuiLink> }
      </Grid>

      <Flex as='footer'>
        <p>Copyright &copy; 2023 TepacheLabs</p>
      </Flex>
    </Grid>
  )
}
