import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { ZodType } from 'zod'

import { serverEnv } from '@/lib/env/server'
import { runQuery } from '@/sanity/groqd-client'

import type { SumanIndexQuery} from '../(suman-index-server)/suman.index-query';
import { sumanIndexQuery } from '../(suman-index-server)/suman.index-query'
import SumanIndexBody from './suman.index-component'
import { PreviewHomePage } from './suman.index-preview'

const SumanSlugRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const token = serverEnv.SANITY_API_READ_TOKEN
  const data = await runQuery<ZodType<SumanIndexQuery>>(
    sumanIndexQuery,
    {},
    draftModeEnabled ? token : undefined
  )

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <PreviewHomePage initial={data} />
  }

  return <SumanIndexBody data={data} />
}

export default SumanSlugRoute
