import React from 'react'

import { PostsList } from './posts-list.component'

const samplePosts: Post[] = [
  {
    slug: 'post-1',
    title: 'Post 1',
  },
  {
    slug: 'post-2',
    title: 'Post 2',
  },
]

describe('<PostsList />', () => {
  it('renders', () => {
    cy.mount(<PostsList posts={samplePosts} />)

    cy.get('ul').should('exist')

    cy.get('ul li a').should('have.length', 2)

    cy.get('ul li a').each(($item, index) => {
      cy.wrap($item)
        .should('have.attr', 'href', `/article/${samplePosts[index].slug}`)
        .and('have.text', samplePosts[index].title)
    })
  })
})
