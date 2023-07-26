import { Metadata } from 'next'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'
import { getMetadata } from '~/lib/metadata'

const slug = 'ley-federal-del-trabajo'

export async function generateMetadata (): Promise<Metadata> {
  const page = getPostBySlug(slug, ['title', 'content', 'description', 'keywords'])

  return getMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  })
}

export default function Home () {
  const page = getPostBySlug(slug, ['title', 'content'])

  return (
    <Page title={ page.title } showGoHome>
      <Markdown content={ page.content }/>
    </Page>
  )
}
