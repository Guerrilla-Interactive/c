import { defineType, defineField } from "sanity";

import type { CustomDocumentDefinition } from '@/sanity/api.desk-structure.ts'
import { SanityFieldGroups, defaultGroups } from '@/sanity/schema-utils/default-groups.util'
import { metaFields } from '@/sanity/schema-utils/generator-field/meta-fields.field'

export const testIndexSchema = defineType({
  type: "document",
  name: "test",
  title: "Test",
  groups: defaultGroups,
  options: {
    previewable: true,
    linkable: true,
    isSingleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Test title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: SanityFieldGroups.basic,
    }),
    ...metaFields({}),
  ],
  preview: {
    select: {
      title: "title",   
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
}) as CustomDocumentDefinition
