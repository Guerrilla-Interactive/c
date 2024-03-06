import type { InferType } from 'groqd'
import { q } from 'groqd'

import { basePageQuery } from '@/sanity/shame-queries/base-page.query'

export const rootIndexQuery = q('*')
  .filterByType('root')
  .grab({
    title: q.string().optional(),
    ...basePageQuery,
  })
  .slice(0)
  .nullable()

export type RootIndexQuery = NonNullable<InferType<typeof rootIndexQuery>>
