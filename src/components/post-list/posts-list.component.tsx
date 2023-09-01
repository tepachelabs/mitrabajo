'use client'

import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { Box, Link as TuiLink, Text } from 'theme-ui'

interface Props {
  posts: Post[];
  title?: string;
  decoration?: string;
}

const styles = {
  ul: {
    pl: 4,
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

export const ListWrapper = ({children}: PropsWithChildren) => (
  <Box as='ul' sx={ styles.ul }>
    {children}
  </Box>
)

export const ListItemWrapper = ({children, decoration = '•'}: PropsWithChildren & { decoration?: Props['decoration'] }) => (
  <Box as='li' sx={ styles.li(decoration) }>
    {children}
  </Box>
)

export const PostsList: FC<Props> = ({ decoration = '•', posts, title }) => {
  return (
    <ListWrapper>
      { title && <h4>{ title }</h4> }

      { posts.map((post) => (
        <ListItemWrapper key={ post.slug } decoration={decoration}>
          <TuiLink as={ Link } href={ `/articulos/${ post.slug }` }>
            <Text>
              { post.title }
            </Text>
          </TuiLink>
        </ListItemWrapper>
      )) }
    </ListWrapper>
  )
}
