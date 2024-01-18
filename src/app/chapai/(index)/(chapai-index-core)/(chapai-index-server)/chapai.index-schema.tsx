import { defineField,defineType } from "sanity";

import type { CustomDocumentDefinition } from '@/sanity/api.desk-structure.ts'
import { defaultGroups } from '@/sanity/schema-utils/default-groups.util'
import { metaFields } from '@/sanity/schema-utils/generator-field/meta-fields.field'

export const chapaiSlugSchema = defineType({
  type: "document",
  name: "chapai",
  title: "Chapai",
  groups: defaultGroups,
  options: {
    previewable: true,
    linkable: true,
    isSingleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Chapai title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basic',
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
