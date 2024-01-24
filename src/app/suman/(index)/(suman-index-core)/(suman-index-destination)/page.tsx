import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { runDraftQuery, runQuery } from '@/sanity/groqd-client'

import { sumanIndexQuery } from '../(suman-index-server)/suman.index-query'
import SumanIndexBody from './suman.index-component'
import { PreviewHomePage } from './suman.index-preview'

const SumanSlugRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const fetchClient = draftModeEnabled ? runDraftQuery : runQuery
  const data = await fetchClient(
    sumanIndexQuery,
    {},
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
