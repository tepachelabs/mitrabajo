/* eslint-disable react/no-children-prop */
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

import { clientComponents } from '~/components/markdown/client-components.config'
import { htmlComponents } from '~/components/markdown/html-components.config'
import { serverComponents } from '~/components/markdown/server-components.config'

interface Props {
  content: Post['content'];
}

const components = {
  ...htmlComponents,
  ...serverComponents,
  ...clientComponents,
}

export const Markdown: FC<Props> = async ({ content }) => {
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
