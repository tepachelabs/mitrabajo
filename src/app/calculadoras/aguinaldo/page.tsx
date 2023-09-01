'use client'
import es from 'date-fns/locale/es'
import {ChangeEvent, useState} from 'react'
import DatePicker from 'react-datepicker'
import {Button, Divider, Input, Paragraph} from 'theme-ui'

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

const cleanMoneyFormat = (moneyString: string): number => {
  const cleanedString = moneyString.replace(/[^0-9.]/g, '')

  const numberValue = parseFloat(cleanedString)

  if (!isNaN(numberValue)) {
    return numberValue
  } else {
    return NaN
  }
}

const formatNumber = (n: string): string => {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const formatCurrency = (input: string, blur?: string): string => {
  if (input === '') {
    return input
  }

  if (input.indexOf('.') >= 0) {
    const decimalPos = input.indexOf('.')

    const leftSide = input.substring(0, decimalPos)
    let rightSide = input.substring(decimalPos)

    const formattedLeft = formatNumber(leftSide)

    rightSide = formatNumber(rightSide)

    if (blur === 'blur') {
      rightSide += '00'
    }

    rightSide = rightSide.substring(0, 2)

    return '$' + formattedLeft + '.' + rightSide
  } else {
    const formattedInput = formatNumber(input)
    return '$' + formattedInput
  }
}

const MINIMUM_AGUINALDO_DAYS_BY_MEXICAN_LAW = 15

const AguinaldoCalculatorPage = () => {
  const [firstWorkDayDate, setFirstWorkDayDate] = useState<Date | null>(null)
  const [grossSalary, setGrossSalary] = useState('')
  const [aguinaldoDays, setAguinaldoDays] = useState(MINIMUM_AGUINALDO_DAYS_BY_MEXICAN_LAW)

  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [expectedAguinaldo, setExpectedAguinaldo] = useState(0)

  const handleFirstDayOfWorkChange = (date: Date | null) => {
    setFirstWorkDayDate(date)
  }

  const handleGrossSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setGrossSalary(formatCurrency(event.target.value))
  }

  const handleAguinaldoDaysChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const isValidNumber = /^(?:[0-9]+)?$/.test(value)
    if (isValidNumber) {
      setAguinaldoDays(Number(value))
    }
  }

  const handleCalculateClick = () => {
    setExpectedAguinaldo(calculateAguinaldo(cleanMoneyFormat(grossSalary), workedDays, aguinaldoDays))
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
        onChange={handleFirstDayOfWorkChange}
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
              Aguinaldo esperado: {formatCurrency(expectedAguinaldo.toString())}
            </Paragraph>
            <Divider />
            <Paragraph>Siempre recuerde que</Paragraph>
            <ul>
              <li>
                El artículo 87 de la LFT establece que “los trabajadores tendrán derecho a
                un aguinaldo anual que deberá pagarse antes del día 20 de diciembre,
                equivalente a quince días de salario, por lo menos”
              </li>
            </ul>
          </>
        ) : null
      }

    </Page>
  )
}

export default AguinaldoCalculatorPage
