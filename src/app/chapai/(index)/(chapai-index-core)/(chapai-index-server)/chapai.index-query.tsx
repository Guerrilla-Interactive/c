import type { InferType } from "groqd"
import { q } from "groqd"

import { basePageQuery } from "@/sanity/shame-queries/base-page.query"

export const chapaiIndexQuery = q("*")
    .filterByType("chapai")
    .grab({
        title: q.string().optional(),
        ...basePageQuery,
    })
    .slice(0)

export type ChapaiIndexQuery = NonNullable<InferType<typeof chapaiIndexQuery>>
