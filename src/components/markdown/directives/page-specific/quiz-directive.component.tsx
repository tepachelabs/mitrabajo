'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'
import { Box, Button, Card, Flex, Heading, Link as TuiLink, Paragraph, Text, ThemeUIStyleObject } from 'theme-ui'

import { SafeMarkdown } from '~/components/markdown/safe-markdown.component'

import type { Quiz } from './quiz.data'
import { isMyJobLegal } from './quiz.data'

const styles: Record<string, ThemeUIStyleObject> = {
  heading: {
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flexDirection: ['column-reverse', 'row'],
  },
}

type QuizId = 'is-my-job-legal'

interface Props {
  quizId: QuizId
}

const quizIdToQuizMap: Record<QuizId, Quiz> = {
  'is-my-job-legal': isMyJobLegal,
}

const useQuiz = (quiz: Quiz) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const currentQuestion = quiz.questions[currentStep]
  const progress = `${ currentStep + 1 } / ${ quiz.questions.length }`

  const goToNextQuestion = () => {
    setCurrentStep(currentStep + 1)
  }

  return {
    currentQuestion,
    currentStep,
    progress,
    goToNextQuestion,
  }
}

const parseResponses = (responses: string | null) => responses?.split(',').map((response) => response === '1')

export const QuizDirective: FC<Props> = ({ quizId }) => {
  const searchParams = useSearchParams()
  const paramResponses = parseResponses(searchParams.get('r'))

  return (
    paramResponses ?
      (
        <Responses quizId={ quizId } responses={ paramResponses }/>
      ) :
      (
        <Quiz quizId={ quizId }/>
      )
  )
}

interface QuizProps {
  quizId: QuizId,
}

const Quiz: FC<QuizProps> = ({ quizId }) => {
  const router = useRouter()
  const quiz = quizIdToQuizMap[quizId]
  const { currentQuestion, currentStep, goToNextQuestion, progress } = useQuiz(quiz)
  const { answers, question: questionLabel } = currentQuestion
  const [responses, setResponses] = useState<boolean[]>([])

  const onAnswerClick = (isCorrect: boolean) => {
    const snapshot = [...responses]
    snapshot[currentStep] = isCorrect
    setResponses(snapshot)

    if (currentStep === quiz.questions.length - 1) {
      const serializedResponses = snapshot.map((response) => response ? '1' : '0').join(',')
      router.push(`?r=${ serializedResponses }`)
    } else {
      goToNextQuestion()
    }
  }

  return (
    <Card my={ 4 }>
      <Flex sx={ styles.heading }>
        <Heading as='h2'>{ questionLabel }</Heading>
        <Heading as='h3'>{ progress }</Heading>
      </Flex>
      <Flex sx={ { gap: 3 } }>
        { answers.map((answer) => (
          <Button
            key={ answer.answer }
            my={ 2 }
            onClick={ () => onAnswerClick(answer.isCorrect) }
            sx={ { width: '100%' } }
          >
            { answer.answer }
          </Button>
        )) }
      </Flex>
    </Card>
  )
}

interface ResponsesProps {
  responses: boolean[],
  quizId: QuizId,
}

interface ResponseRecord {
  label: string;
  content: string;
}

const Responses: FC<ResponsesProps> = ({ quizId, responses }) => {
  const quiz = quizIdToQuizMap[quizId]

  const incorrectResponses: ResponseRecord[] = responses.reduce<ResponseRecord[]>((acc, isCorrect, index) => {
    if (!isCorrect) {
      const response = {
        label: quiz.questions[index].question,
        content: quiz.questions[index].explanation,
      }

      acc.push(response)
    }

    return acc
  }, [])

  return (
    <Card my={ 4 }>
      <Heading as='h2'>Resultados</Heading>

      { incorrectResponses.length === 0 ? (
        <Box>
          <Paragraph>
            Basado en tus respuestas, es posible que tu trabajo esté cumpliendo con todas las regulaciones de la Ley
            Federal del Trabajo.
          </Paragraph>
        </Box>
      ) : (
        <Box>
          <Paragraph>
            Basado en tus respuestas, te sugerimos poner atención a los siguientes puntos:
          </Paragraph>

          <Flex mt={ 3 } sx={ { flexDirection: 'column', gap: 3 } }>
            { incorrectResponses.map((response, index) => (
              <Box key={ index }>
                <Heading as='h3'>{ response.label }</Heading>
                <SafeMarkdown content={ response.content }/>
              </Box>
            )) }
          </Flex>

          <Paragraph>
            Es posible que tu trabajo no esté cumpliendo con todas las regulaciones de la Ley Federal del Trabajo.&nbsp;
            <TuiLink as={ Link } href='/articulos/pasos-a-seguir-si-sospechas-que-tu-trabajo-no-es-legal'>
              <Text>Pasos a seguir si sospechas que tu trabajo no es legal.</Text>
            </TuiLink>
          </Paragraph>
        </Box>
      ) }

      <TuiLink as={ Link } href='?'>
        <Text>Volver a empezar</Text>
      </TuiLink>

    </Card>
  )
}
