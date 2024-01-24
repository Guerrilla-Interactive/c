import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { runDraftQuery, runQuery } from '@/sanity/groqd-client'

import { chapaiIndexQuery } from '../(chapai-index-server)/chapai.index-query'
import ChapaiIndexBody from './chapai.index-component'
import { ChapaiPreview } from './chapai.index-preview'

const ChapaiIndexRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const fetchClient = draftModeEnabled ? runDraftQuery : runQuery
  const data = await fetchClient(chapaiIndexQuery, {})

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <ChapaiPreview initial={data} />
  }

  return <ChapaiIndexBody data={data} />
}

export default ChapaiIndexRoute
