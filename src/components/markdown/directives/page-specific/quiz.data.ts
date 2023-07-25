// Types

export interface Quiz {
  questions: QuizQuestion[]
}

interface QuizQuestion {
  question: string
  answers: QuizAnswer[]
  explanation: string
}

interface QuizAnswer {
  answer: string
  isCorrect: boolean
}

// Common

const TRUE = {
  answer: 'Verdadero ✅',
  isCorrect: true,
}

const FALSE = {
  answer: 'Falso ❌',
  isCorrect: false,
}

// Data

export const isMyJobLegal: Quiz = {
  questions: [
    {
      question: '¿Recibes al menos el salario mínimo?',
      answers: [TRUE, FALSE],
      explanation: 'El salario mínimo es la cantidad mínima que debe recibir un trabajador por su trabajo.\n\n[Consulta aquí más información sobre el salario mínimo](/articulos/que-es-el-salario-minimo).',
    },
    {
      question: '¿Tienes al menos un día de descanso a la semana?',
      answers: [TRUE, FALSE],
      explanation: 'El descanso semanal es un derecho de los trabajadores.\n\n[Consulta aquí más información sobre tus descansos de ley](/articulos/como-funcionan-los-dias-de-descanso).',
    },
    {
      question: '¿Recibes un aguinaldo anual?',
      answers: [TRUE, FALSE],
      explanation: 'El aguinaldo es una gratificación que los trabajadores reciben de sus empleadores al final de cada año.\n\n[Consulta aquí más información sobre el aguinaldo](/articulos/que-es-el-aguinaldo-y-como-se-calcula).',
    },

    {
      question: '¿Tienes un contrato de trabajo?',
      answers: [TRUE, FALSE],
      explanation: 'El contrato de trabajo es un derecho de los trabajadores.\n\n[Consulta aquí más información sobre el contrato de trabajo](/articulos/que-es-un-contrato-de-trabajo-y-en-que-deberia-fijarme-antes-de-firmar).',
    },

    {
      question: '¿Estás inscrito en el Instituto Mexicano del Seguro Social (IMSS)?',
      answers: [TRUE, FALSE],
      explanation: 'El IMSS es un derecho de los trabajadores.\n\n[Consulta aquí más información sobre el IMSS](/articulos/que-es-la-ley-del-seguro-social-imss).',
    },
  ],
}
