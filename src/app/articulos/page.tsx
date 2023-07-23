import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'

interface PageParameters {
  slug: string
}

export default function PostHome ({ params }: { params: PageParameters }) {
  const page = getPostBySlug('articulos', ['title', 'content'])

  return (
    <Page title={ page.title } showGoHome>
      <Markdown content={ page.content }/>
    </Page>
  )
}
