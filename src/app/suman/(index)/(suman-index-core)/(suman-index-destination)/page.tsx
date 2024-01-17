import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { ZodType } from 'zod'

import { serverEnv } from '@/lib/env/server'
import { runQuery } from '@/sanity/groqd-client'

import { dataQuery } from '../(suman-index-server)/suman.index-query'
import { PreviewHomePage } from './suman.index-preview'

interface PageData {
  title: string
}

const SumanSlugRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const token = serverEnv.SANITY_API_READ_TOKEN
  const data = await runQuery<ZodType<PageData>>(dataQuery, {}, token)

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <PreviewHomePage initial={data} />
  }

  return <div>{data.title}</div>
}

export default SumanSlugRoute
