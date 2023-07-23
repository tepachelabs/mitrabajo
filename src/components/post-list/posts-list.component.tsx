'use client'

import Link from 'next/link'
import { FC } from 'react'
import { Box, Link as TuiLink, Text } from 'theme-ui'

interface Props {
  posts: Post[];
  title?: string;
  decoration?: string;
}

const styles = {
  ul: {
    pl: [3, 4],
  },
  li: (decoration: string) => ({
    mb: 2,
    listStyleType: `"${ decoration }"`,
    paddingInlineStart: '1ch',
    '&::marker': {
      color: 'primary',
    },
  }),
}

export const PostsList: FC<Props> = ({ decoration = '•', posts, title }) => {
  return (
    <Box as='ul' sx={ styles.ul }>
      { title && <h4>{ title }</h4> }

      { posts.map((post) => (
        <Box as='li' key={ post.slug } sx={ styles.li(decoration) }>
          <TuiLink as={ Link } href={ `/articulos/${ post.slug }` }>
            <Text>
              { post.title }
            </Text>
          </TuiLink>
        </Box>
      )) }
    </Box>
  )
}
