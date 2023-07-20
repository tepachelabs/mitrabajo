import Link from 'next/link'

import { Markdown } from '~/components/markdown'
import { Page } from '~/components/page'
import { getPostBySlug } from '~/lib/api'

interface PageParameters {
  slug: string
}

export default function Slug ({ params }: { params: PageParameters }) {
  const page = getPostBySlug(params.slug, ['title', 'content'])

  return (
    <Page>
      <Markdown content={ page.content }/>
      <Link href='/'>Regresar a inicio</Link>
    </Page>
  )
}
