/* eslint-disable react/no-children-prop */
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

import { PostListDirective } from './directives/post-list-directive.component'

interface Props {
  content: Post['content'];
}

const components = {
  'post-list': PostListDirective,
}

export const Markdown: FC<Props> = async ({ content }) => {
  return (
    <ReactMarkdown
      unwrapDisallowed
      remarkPlugins={ [remarkDirective, remarkDirectiveRehype] }
      children={ content! }
      components={ components }
    />
  )
}
