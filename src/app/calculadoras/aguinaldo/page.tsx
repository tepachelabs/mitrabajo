'use client'
import es from 'date-fns/locale/es'
import {ChangeEvent, useState} from 'react'
import DatePicker from 'react-datepicker'
import {Text, Divider, Input, Button, Paragraph} from 'theme-ui'

import {Page} from '~/components/page'

const calculateAguinaldo = (grossSalary: number, daysWorked: number, aguinaldoDays: number): number => {
  const proportionalAguinaldoDays = (aguinaldoDays / 365) * daysWorked
  const baseDailySalary = grossSalary / 30.4 // Average days in a month

  return baseDailySalary * proportionalAguinaldoDays
}

const daysPassedSinceDate = (targetDate: Date): number => {
  const currentDate = new Date()
  const timeDifference = currentDate.getTime() - targetDate.getTime()
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

const moneyFormatter = Intl.NumberFormat('es-mx', {
  maximumFractionDigits: 2,
})

const MINIMUM_AGUINALDO_DAYS_BY_MEXICAN_LAW = 15

const AguinaldoCalculatorPage = () => {
  const [firstWorkDayDate, setFirstWorkDayDate] = useState<Date | null>(null)
  const [grossSalary, setGrossSalary] = useState(0)
  const [aguinaldoDays, setAguinaldoDays] = useState(MINIMUM_AGUINALDO_DAYS_BY_MEXICAN_LAW)

  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [expectedAguinaldo, setExpectedAguinaldo] = useState(0)

  const handleGrossSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setGrossSalary(Number(value))
  }

  const handleAguinaldoDaysChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAguinaldoDays(Number(value))
  }

  const handleCalculateClick = () => {
    setExpectedAguinaldo(calculateAguinaldo(grossSalary, workedDays, aguinaldoDays))
    setWasSubmitted(true)
  }

  const workedDays = firstWorkDayDate
    ? daysPassedSinceDate(firstWorkDayDate)
    : 0

  const isSubmittedDisabled = workedDays < 0 || firstWorkDayDate === null
  return (
    <Page title="Calcula tu aguinaldo">
      <Paragraph>¿Cuándo empezaste a trabajar?</Paragraph>
      <DatePicker
        locale={es}
        selected={firstWorkDayDate}
        dateFormat="dd/MM/yyyy"
        title="Primer dia de trabajo"
        onChange={(newDate) => setFirstWorkDayDate(newDate)}
      />
      <Divider />
      <Paragraph>¿Cuál es tu sueldo bruto mensual?</Paragraph>
      <Input
        sx={{
          mb: 2,
        }}
        type="text"
        value={grossSalary}
        onChange={handleGrossSalaryChange}
      />
      <Paragraph>¿Cuántos días de aguinaldo? (Mínimo por ley son 15)</Paragraph>
      <Input
        sx={{
          mb: 2,
        }}
        type="text"
        value={aguinaldoDays}
        onChange={handleAguinaldoDaysChange}
      />
      <Button
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
          ':disabled': {
            opacity: 0.7,
            cursor: 'default',
            backgroundColor: 'gray',
          },
        }}
        disabled={isSubmittedDisabled}
        onClick={handleCalculateClick}
      >
        Calcular
      </Button>
      <Divider />
      {
        wasSubmitted ? (
          <>
            <Paragraph>
              Dias trabajados: {workedDays}
            </Paragraph>
            <Paragraph>
              Aguinaldo esperado: {moneyFormatter.format(expectedAguinaldo)}
            </Paragraph>
          </>
        ) : null
      }
    </Page>
  )
}

export default AguinaldoCalculatorPage
