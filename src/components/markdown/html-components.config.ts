import {
  AnchorDirective,
  HeadingFiveDirective,
  HeadingFourDirective,
  HeadingOneDirective,
  HeadingSixDirective,
  HeadingThreeDirective,
  HeadingTwoDirective,
  ListItemDirective,
  OrderedListDirective,
  ParagraphDirective,
  UnorderedListDirective,
} from '~/components/markdown/directives'

export const htmlComponents = {
  p: ParagraphDirective,
  a: AnchorDirective,
  h1: HeadingOneDirective,
  h2: HeadingTwoDirective,
  h3: HeadingThreeDirective,
  h4: HeadingFourDirective,
  h5: HeadingFiveDirective,
  h6: HeadingSixDirective,
  ol: OrderedListDirective,
  ul: UnorderedListDirective,
  li: ListItemDirective,
}
