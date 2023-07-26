'use client'

import { FC, PropsWithChildren } from 'react'
import { Message, Paragraph } from 'theme-ui'

const defaultDisclaimer = 'Este artículo tiene fines informativos y no sustituye el asesoramiento legal profesional. Si tienes dudas sobre la legalidad de tu trabajo, te recomendamos que consultes a un abogado laboral.'

export const DisclaimerDirective: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Message my={ 4 }>
      <Paragraph as='i'>
        ⚠️ Nota: { children || defaultDisclaimer }
      </Paragraph>
    </Message>
  )
}
