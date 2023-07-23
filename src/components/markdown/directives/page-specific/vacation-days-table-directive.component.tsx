'use client'

import { FC } from 'react'
import { Box } from 'theme-ui'

const content = {
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

export const VacationDaysTableDirective: FC = () => {
  return (
    <Box as='table' sx={ {
      mb: 3,
      textAlign: 'center',
      width: ['100%', 300],
    } }>
      <thead>
        <tr>
          {
            content.thead.map((item) => (
              <th key={ item }>{ item }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          content.tbody.map((record) => (
            <tr key={ `${ record[0] }-${ record[1] }` }>
              {
                record.map(item => (
                  <td key={ item }>
                    { item }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </Box>
  )
}
