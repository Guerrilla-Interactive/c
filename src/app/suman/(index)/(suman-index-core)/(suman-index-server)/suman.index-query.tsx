import type { InferType } from "groqd"
import { q } from "groqd"

import { basePageQuery } from "@/sanity/shame-queries/base-page.query"

export const sumanIndexQuery = q('*')
  .filterByType('suman')
  .grab({
    title: q.string().optional(),
    ...basePageQuery
  })
  .slice(0)

export type SumanIndexQuery = NonNullable<InferType<typeof sumanIndexQuery>>
