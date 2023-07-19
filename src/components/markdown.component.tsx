import { FC } from 'react'
import { remark } from 'remark'
import html from 'remark-html'

interface Props {
  content: Post['content'];
}

export const Markdown: FC<Props> = async ({ content }) => {
  const processedContent = await remark()
    .use(html)
    .process(content || '')
  const contentHtml = processedContent.toString()

  return (
    <div dangerouslySetInnerHTML={ { __html: contentHtml } }/>
  )
}
