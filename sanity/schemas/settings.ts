import { Gear } from '@phosphor-icons/react'
import { defineType } from 'sanity'

import type { CustomDocumentDefinition } from '@/sanity/api.desk-structure.ts'

export const settings = defineType({
  type: 'document',
  title: 'Setting',
  name: 'setting',
  icon: Gear,
  options: {
    isSingleton: true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      title: 'Site Title',
    },
  ],
}) as CustomDocumentDefinition
