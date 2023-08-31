'use client'
import es from 'date-fns/locale/es'
import {ChangeEvent, useState} from 'react'
import DatePicker from 'react-datepicker'
import {Text, Divider, Input, Button} from 'theme-ui'

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

const AguinaldoCalculatorPage = () => {
  const [firstWorkDayDate, setFirstWorkDayDate] = useState<Date | null>(new Date())
  const [grossSalary, setGrossSalary] = useState(0)

  const handleGrossSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setGrossSalary(Number(value))
  }

  const workedDays = firstWorkDayDate
    ? daysPassedSinceDate(firstWorkDayDate)
    : 0

  return (
    <Page title="Calcula tu aguinaldo">
      <Text>¿Cuándo empezaste a trabajar?</Text>
      <DatePicker
        locale={es}
        selected={firstWorkDayDate}
        dateFormat="dd/MM/yyyy"
        title="Primer dia de trabajo"
        onChange={(newDate) => setFirstWorkDayDate(newDate)}
      />
      <Divider />
      <Text>¿Cuál es tu sueldo bruto mensual?</Text>
      <Input
        sx={{
          mb: 2,
        }}
        type="text"
        value={grossSalary}
        onChange={handleGrossSalaryChange}
      />
      <Button>Calcular</Button>
      <Divider />
      <Text>
        Dias trabajados: {workedDays}
      </Text>
      <Text>
        Aguinaldo esperado: {moneyFormatter.format(calculateAguinaldo(grossSalary, workedDays, 15))}
      </Text>
    </Page>
  )
}

export default AguinaldoCalculatorPage
