import { Metadata } from 'next'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'
import { getMetadata } from '~/lib/metadata'

interface PageParameters {
  slug: string
}

export async function generateMetadata ({ params }: { params: PageParameters }): Promise<Metadata> {
  const page = getPostBySlug(params.slug, ['title', 'content', 'description', 'keywords'])

  return getMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  })
}

export default function Slug ({ params }: { params: PageParameters }) {
  const page = getPostBySlug(params.slug, ['title', 'content'])

  return (
    <Page title={ page.title } showGoHome>
      <Markdown content={ page.content }/>
    </Page>
  )
}
