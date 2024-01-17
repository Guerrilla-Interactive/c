import { draftMode } from "next/headers"
import { notFound } from "next/navigation"

import { serverEnv } from "@/lib/env/server"
import { getClient } from "@/sanity/client"

import { dataQuery } from "../(suman-index-server)/suman.index-query"
import { PreviewHomePage } from "./suman.index-preview"

interface PageData {
    title: string
}


const SumanSlugRoute = async () => {
    const { isEnabled: draftModeEnabled } = draftMode()
    const token = serverEnv.SANITY_API_READ_TOKEN
    const client = getClient(draftModeEnabled ? { token } : undefined)
    const data = await client.fetch(dataQuery) as PageData

    if (!data) {
        return notFound()
    }

    if (draftModeEnabled) {
        return <PreviewHomePage initial={data} />
    }

    return (
        <div>{data.title}</div>
    )

}




export default SumanSlugRoute
