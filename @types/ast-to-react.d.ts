import { ReactMarkdownNames } from 'react-markdown/lib/ast-to-react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'post-list': ReactMarkdownNames
    }
  }
}
