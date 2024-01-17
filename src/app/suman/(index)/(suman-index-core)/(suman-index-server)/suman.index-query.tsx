// import type { InferType } from "groqd"
// import { q } from "groqd"

// import { basePageQuery } from "@/lib/queries/utils/base-page.query"
// import { notDraft } from "@/src/lib/sanity/not-draft.query"
// import { sectionBlockQuery } from "@/src/components/sections/sections/section-block.queries"
//
// export const sumanSlugQuery = q("*")
//     .filterByType("suman")
//     .filter(`${notDraft} && $slug == slug.current`)
//     .grab({
//         title: q.string().optional(),
//         ...sectionBlockQuery,
//         ...basePageQuery,
//     })
//     .slice(0)
//     .nullable()
//
// export type SumanSlugQuery = NonNullable<InferType<typeof sumanSlugQuery>>

export const dataQuery = `*[_type  == "suman"][0]{title}`
