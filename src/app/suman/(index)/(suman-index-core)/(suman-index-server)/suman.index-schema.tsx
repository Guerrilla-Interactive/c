import { defineField,defineType } from "sanity";

import { defaultGroups } from "@/sanity/schema-utils/default-groups.util";
import { metaFields } from "@/sanity/schema-utils/generator-field/meta-fields.field";

export const sumanIndexSchema = defineType({
  type: "document",
  name: "suman",
  title: "Suman",
  groups: defaultGroups,
  options: {
    previewable: true,
    linkable: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Suman title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "basic"
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
});
