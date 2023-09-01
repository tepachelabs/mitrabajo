'use client'
import es from 'date-fns/locale/es'
import {ChangeEvent, useState} from 'react'
import DatePicker from 'react-datepicker'
import {Button, Divider, Input, Paragraph} from 'theme-ui'

import {Page} from '~/components/page'
import {
  formatCurrency,
  calculateAguinaldo,
  cleanMoneyFormat,
  daysPassedSinceDate,
} from '~/utils/calculators-utils'
import {ONE_YEAR_IN_DAYS, MINIMUM_AGUINALDO_DAYS_BY_MEXICAN_LAW} from '~/utils/constants'

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
    setGrossSalary(formatCurrency(value))
  }

  const handleAguinaldoDaysChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const isValidNumber = /^(?:[0-9]+)?$/.test(value)
    if (isValidNumber) {
      setAguinaldoDays(Number(value))
    }
  }

  const handleCalculateClick = () => {
    const fixedWorkedDays = workedDays > ONE_YEAR_IN_DAYS
      ? ONE_YEAR_IN_DAYS
      : workedDays

    setExpectedAguinaldo(calculateAguinaldo(cleanMoneyFormat(grossSalary), fixedWorkedDays, aguinaldoDays))
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
              A;o ya cumplido: {formatCurrency(expectedAguinaldo.toString())}
            </Paragraph>
            <Paragraph>
              Dias trabajados a la fecha de hoy: {workedDays}
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
