import {useState} from 'react'
import { Flex, Input, Button, Text, Heading } from 'theme-ui'

export const ContactForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    setEmail('')
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
          mb: 3,
        }}
      />
      <Button
        type="submit"
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
