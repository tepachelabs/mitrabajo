import { Metadata } from 'next'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'

interface PageParameters {
  slug: string
}

export async function generateMetadata ({ params }: { params: PageParameters }): Promise<Metadata> {
  const page = getPostBySlug(params.slug, ['title', 'content', 'description', 'keywords'])

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  }
}

export default function Slug ({ params }: { params: PageParameters }) {
  const page = getPostBySlug(params.slug, ['title', 'content'])

  return (
    <Page title={ page.title } showGoHome>
      <Markdown content={ page.content }/>
    </Page>
  )
}
