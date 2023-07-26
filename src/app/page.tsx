import { Metadata } from 'next'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'

const slug = 'landing'

export async function generateMetadata (): Promise<Metadata> {
  const landingPage = getPostBySlug(slug, ['title', 'content', 'description', 'keywords'])

  return {
    title: landingPage.title,
    description: landingPage.description,
    keywords: landingPage.keywords,
  }
}

export default function Home () {
  const landingPage = getPostBySlug(slug, ['title', 'content'])

  return (
    <Page>
      <Markdown content={ landingPage.content }/>
    </Page>
  )
}
