import { defineType } from 'sanity'

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
})

export const settings = defineType({
  type: 'document',
  title: 'Setting',
  name: 'setting',
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
})
