'use client'

import { FC } from 'react'
import { Card, Flex, Grid, Heading, Paragraph } from 'theme-ui'

import { theme } from '~/default.theme'

const styles = {
  grid: {
    gridGap: 5,
    gridTemplateColumns: ['1fr', '1fr 1fr'],
    pb: 4,
    pt: 4,
  },
  emoji: (background: string) => ({
    alignItems: 'center',
    background,
    borderRadius: '50%',
    color: 'primary',
    fontSize: '4em',
    height: '1.6em',
    justifyContent: 'center',
    width: '1.6em',
  }),
}

const emojiBackground: string[] = [
  theme.colors?.primary as string,
  theme.colors?.colorInBetweenOne as string,
  theme.colors?.colorInBetweenTwo as string,
  theme.colors?.complementary as string,
]

const content = [
  {
    emoji: '📄',
    title: 'Contrato de Trabajo',
    content: 'Deberías tener un contrato de trabajo escrito, que es un documento legal que establece los términos y condiciones de tu empleo.',
  },
  {
    emoji: '🩺',
    title: 'Registro ante el IMSS',
    content: 'Deberías estar registrado en el Instituto Mexicano del Seguro Social (IMSS) para tener acceso a la seguridad social.',
  },
  {
    emoji: '💰',
    title: 'Recibos de nómina',
    content: 'Deberías recibir un recibo de nómina (CFDI) por cada pago que recibes.',
  },
  {
    emoji: '🕔',
    title: 'Jornada laboral',
    content: 'Debe respetarse tu jornada laboral, la cual no puede exceder las 8 horas diarias para trabajos diurnos, según lo estipulado por la Ley Federal del Trabajo.',
  },
]

export const LaboralRightsGridDirective: FC = () => {
  return (
    <Grid sx={ styles.grid }>
      {
        content?.map((item, index) => {
          const colorIndex = index % emojiBackground.length
          return (
            <Card key={ item.title }>
              <Flex sx={ styles.emoji(emojiBackground[colorIndex]) }>{ item.emoji }</Flex>
              <Heading as='h3'>{ item.title }</Heading>
              <Paragraph>{ item.content }</Paragraph>
            </Card>
          )
        })
      }
    </Grid>
  )
}
