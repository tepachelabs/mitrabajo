import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'

export default function Home () {
  const landingPage = getPostBySlug('landing', ['title', 'content'])

  return (
    <Page>
      <Markdown content={ landingPage.content }/>
    </Page>
  )
}
