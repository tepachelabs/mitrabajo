import React from 'react'

import { Page } from './page.component'

describe('<Page />', () => {
  it('renders', () => {
    cy.mount(<Page>test</Page>)

    cy.get('main').should('exist')
    cy.get('footer').should('exist')
  })
})
