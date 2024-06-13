import type { RichTextElement } from '@payloadcms/richtext-slate/dist/types'

import label from './label'
import largeBody from './largeBody'
import breackLine from './LineBreak'

const elements: RichTextElement[] = [
  'blockquote',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',

  'link','textAlign','indent',
  largeBody,
  breackLine,
  label,
]

export default elements
