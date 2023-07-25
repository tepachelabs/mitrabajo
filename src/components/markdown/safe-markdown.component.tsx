/* eslint-disable react/no-children-prop */
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

import { htmlComponents } from '~/components/markdown/html-components.config'

interface Props {
  content: Post['content'];
}

const components = {
  ...htmlComponents,
}

export const SafeMarkdown: FC<Props> = async ({ content }) => {
  return (
    <ReactMarkdown
      unwrapDisallowed
      remarkPlugins={ [remarkDirective, remarkDirectiveRehype] }
      children={ content! }
      // @ts-ignore
      components={ components }
    />
  )
}
