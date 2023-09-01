'use client'

import Link from 'next/link'
import { Link as TuiLink, Text } from 'theme-ui'

import {Page} from '~/components/page'
import { ListWrapper, ListItemWrapper} from '~/components/post-list'

const CalculatorsPage = () => {
  return (
    <Page title="Calculadoras">
      <ListWrapper>
        <ListItemWrapper>
          <TuiLink as={ Link } href="/calculadoras/aguinaldo">
            <Text>
              Aguinaldo
            </Text>
          </TuiLink>
        </ListItemWrapper>
      </ListWrapper>
    </Page>
  )
}

export default CalculatorsPage
