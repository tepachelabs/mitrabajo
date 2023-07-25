import { FC } from 'react'

import { PostsList } from '~/components/post-list'
import { getAllPosts } from '~/lib/api'

interface Props {
  decoration: string
}

export const PostListDirective: FC<Props> = ({ decoration }) => {
  const posts = getAllPosts(['title'])

  return <PostsList posts={ posts } decoration={ decoration }/>
}
