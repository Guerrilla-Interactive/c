import type { InferType } from "groqd"
import { q } from "groqd"

import { basePageQuery } from "@/sanity/shame-queries/base-page.query"

export const testIndexQuery = q("*")
    .filterByType("test")
    .grab({
        title: q.string().optional(),
        ...basePageQuery,
    })
    .slice(0)
    .nullable()

export type TestIndexQuery = NonNullable<InferType<typeof testIndexQuery>>
