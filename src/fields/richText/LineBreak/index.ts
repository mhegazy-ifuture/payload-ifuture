import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'

import Button from './Button'
import Element from './Element'
import addBreakLine from './plugin'

const breackLine: RichTextCustomElement = {
  name: 'Breack Line',
  Button,
  Element,
  plugins: [addBreakLine],
}

export default breackLine
