import type { Block } from 'payload/types'

import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import { backgroundColor } from '../../fields/BackgroundColor'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
  backgroundColor,
    richText(),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
