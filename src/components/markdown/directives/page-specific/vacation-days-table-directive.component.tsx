'use client'

import { FC } from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'

const styles: Record<string, ThemeUIStyleObject> = {
  table: {
    fontFamily: 'body',
    mb: 4,
    textAlign: 'center',
    width: ['100%', 'fit-content'],
    borderCollapse: 'collapse',
  },
  row: {
    // borderBottom: '1px solid',
    // borderColor: 'boxShadowColor',
  },
  cell: {
    py: 2,
    px: 4,
    '&:not(th)': {
      borderTop: '1px solid',
      borderColor: 'boxShadowColor',
    },
  },
}

const vacationData = {
  thead: [
    'Año laborado',
    'Días de vacaciones',
  ],
  tbody: [
    ['1', '12'],
    ['2', '14'],
    ['3', '16'],
    ['4', '18'],
    ['5', '20'],
  ],
}

const extendedVacationData = {
  thead: [
    'Año laborado',
    'Días de vacaciones',
  ],
  tbody: [
    ['6 - 10', '22'],
    ['10 - 15', '24'],
    ['15 - 20', '26'],
    ['20 - 25', '28'],
    ['25 - 30', '30'],
  ],
}

interface Props {
  extended?: boolean
}

export const VacationDaysTableDirective: FC<Props> = ({ extended }) => {
  const data = extended ? extendedVacationData : vacationData

  return (
    <Box as='table' sx={ styles.table }>
      <thead>
        <Box as='tr'>
          {
            data.thead.map((item) => (
              <Box as='th' key={ item } sx={ styles.cell }>{ item }</Box>
            ))
          }
        </Box>
      </thead>
      <tbody>
        {
          data.tbody.map((record) => (
            <Box key={ `${ record[0] }-${ record[1] }` } as='tr'>
              {
                record.map(item => (
                  <Box as='td' key={ item } sx={ styles.cell }>
                    { item }
                  </Box>
                ))
              }
            </Box>
          ))
        }
      </tbody>
    </Box>
  )
}
