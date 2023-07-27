import { Metadata } from 'next'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'
import { getMetadata } from '~/lib/metadata'

const slug = 'articulos'

export async function generateMetadata (): Promise<Metadata> {
  const page = getPostBySlug(slug, ['title', 'content', 'description', 'keywords'])

  return getMetadata({
    url: `/${ slug }`,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  })
}

export default function PostHome () {
  const page = getPostBySlug(slug, ['title', 'content'])

  return (
    <Page title={ page.title }>
      <Markdown content={ page.content }/>
    </Page>
  )
}
