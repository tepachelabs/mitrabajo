import {useState, FormEvent} from 'react'
import { Flex, Input, Button, Text, Heading } from 'theme-ui'

import {isValidEmail} from '~/components/contact-form/is-valid-email'

export const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleError = () => {
    setError('Por favor, introduce una dirección de correo electrónico válida.')
  }

  const handleSuccess = () => {
    setEmail('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (isValidEmail(email)) {
      handleSuccess()
      return
    }

    handleError()
  }

  return (
    <Flex
      as="form"
      sx={{
        flexDirection: 'column',
        justifyContent: 'start',
      }}
      onSubmit={handleSubmit}
    >
      <Heading
        sx={{ mb: 3 }}
        as="h2"
      >
        ¿Quisieras tener asesoría legal?
      </Heading>
      <Text
        sx={{ mb: 3 }}
        as="p"
      >
        Déjanos tu correo:
      </Text>
      <Input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 1,
        }}
      />
      {error && <Text sx={{ color: 'red', mb: 2 }}>{error}</Text>}
      <Button
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Enviar
      </Button>
    </Flex>
  )
}
