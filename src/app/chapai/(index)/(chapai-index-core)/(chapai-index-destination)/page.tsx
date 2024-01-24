import { draftMode } from 'next/headers'
import { notFound } from "next/navigation"
import type { ZodType } from 'zod'

import { serverEnv } from '@/lib/env/server'
import { runQuery } from '@/sanity/groqd-client'

import type { ChapaiIndexQuery} from '../(chapai-index-server)/chapai.index-query';
import { chapaiIndexQuery } from '../(chapai-index-server)/chapai.index-query'
import ChapaiIndexBody from './chapai.index-component'
import { ChapaiPreview} from './chapai.index-preview'

const ChapaiIndexRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const token = serverEnv.SANITY_API_READ_TOKEN
  const data = await runQuery<ZodType<ChapaiIndexQuery>>(
    chapaiIndexQuery,
    {},
    draftModeEnabled ? token : undefined
  )

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <ChapaiPreview initial={data} />
  }

  return <ChapaiIndexBody data={data} />
}

export default ChapaiIndexRoute