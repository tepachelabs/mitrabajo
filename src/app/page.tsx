import { Markdown } from '~/components/markdown.component'
import { Page } from '~/components/page.component'
import { PostsList } from '~/components/posts-list.component'
import { getAllPosts, getPostBySlug } from '~/lib/api'

export default function Home () {
  const landingPage = getPostBySlug('landing', ['title', 'content'])
  const posts = getAllPosts(['title'])

  return (
    <Page>
      <Markdown content={ landingPage.content }/>
      <PostsList title='Contenido' posts={posts} />
    </Page>
  )
}
