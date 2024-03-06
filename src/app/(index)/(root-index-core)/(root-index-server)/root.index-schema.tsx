import { defineField, defineType } from 'sanity'

import type { CustomDocumentDefinition } from '@/sanity/api.desk-structure.ts'
import {
  defaultGroups,
  SanityFieldGroups,
} from '@/sanity/schema-utils/default-groups.util'
import { metaFields } from '@/sanity/schema-utils/generator-field/meta-fields.field'

export const rootIndexSchema = defineType({
  type: 'document',
  name: 'root',
  title: 'Home',
  groups: defaultGroups,
  options: {
    previewable: true,
    linkable: true,
    isSingleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Home',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: SanityFieldGroups.basic,
    }),
    ...metaFields({}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      }
    },
  },
}) as CustomDocumentDefinition
