import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { backgroundColor } from '../../fields/BackgroundColor'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Archive',
    plural: 'Archives',
  },
  fields: [
    backgroundColor,
    richText({
      name: 'introContent',
      label: 'Intro Content',
      localized:true
    }),
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: 'Collections To Show',
      defaultValue: 'posts',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: 'Posts',
          value: 'posts',
        },
        {
          label: 'Projects',
          value: 'projects',
        },
        {
          label: 'Services',
          value: 'services',
        },
      ],
    },
    
    {
      type: 'number',
      name: 'limit',
      label: 'Limit',
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: 'Selection',
      relationTo: ['posts', 'projects', 'services'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: 'Populated Docs',
      relationTo: ['posts', 'projects', 'services'],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    }
    
  ],
}
