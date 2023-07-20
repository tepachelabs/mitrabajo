import Link from 'next/link'
import { FC } from 'react'

interface Props {
  posts: Post[];
  title?: string;
}

export const PostsList: FC<Props> = ({ posts, title }) => {
  return (
    <ul>
      { title && <h4>{ title }</h4> }

      { posts.map((post) => (
        <li key={ post.slug }>
          <Link href={ `/article/${ post.slug }` }>
            { post.title }
          </Link>
        </li>
      )) }
    </ul>
  )
}
