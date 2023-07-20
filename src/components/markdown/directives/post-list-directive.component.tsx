import { FC } from 'react'

import { PostsList } from '~/components/post-list'
import { getAllPosts } from '~/lib/api'

export const PostListDirective: FC = () => {
  const posts = getAllPosts(['title'])

  return <PostsList posts={ posts }/>
}
