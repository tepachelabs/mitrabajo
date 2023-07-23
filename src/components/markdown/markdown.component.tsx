/* eslint-disable react/no-children-prop */
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

import {
  AnchorDirective, HeadingFiveDirective, HeadingFourDirective,
  HeadingOneDirective, HeadingSixDirective, HeadingThreeDirective, HeadingTwoDirective,
  ParagraphDirective,
  PostListDirective,
} from '~/components/markdown/directives'

interface Props {
  content: Post['content'];
}

const components = {
  'post-list': PostListDirective,
  p: ParagraphDirective,
  a: AnchorDirective,
  h1: HeadingOneDirective,
  h2: HeadingTwoDirective,
  h3: HeadingThreeDirective,
  h4: HeadingFourDirective,
  h5: HeadingFiveDirective,
  h6: HeadingSixDirective,
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
