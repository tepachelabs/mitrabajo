'use client'

import { FC, ReactNode } from 'react'
import { Card, Heading, Text } from 'theme-ui'

interface Props {
  children?: ReactNode;
  content?: string;
}

const styles = {
  card: {
    width: ['100%', '50%', '33.33%'],
  },
}

export const CardDirective: FC<Props> = ({ children, content }) => {
  return (
    <Card sx={ styles.card }>
      <Heading as='h3'>{ children }</Heading>
      <Text>{ content }</Text>
    </Card>
  )
}
