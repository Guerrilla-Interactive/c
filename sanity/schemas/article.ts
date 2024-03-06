import { defineType } from 'sanity'

import type { CustomDocumentDefinition } from '@/sanity/api.desk-structure.ts'

export const article = defineType({
  type: 'document',
  title: 'Article',
  name: 'article',
  options: {
    isSingleton: false,
  },
  fields: [
    {
      type: 'string',
      name: 'Title',
    },
  ],
}) as CustomDocumentDefinition
