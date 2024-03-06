import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Resend } from 'resend'
import { generatePageMeta } from 'src/shame-utils/generate-page-meta-util'

import { runDraftQuery, runQuery } from '@/sanity/groqd-client'

import { rootIndexQuery } from '../(root-index-server)/root.index-query'
import RootIndexBody from './root.index-component'
import { RootPreview } from './root.index-preview'

export const generateMetadata = async () => {
  const data = await runQuery(rootIndexQuery, {})
  return generatePageMeta(data?.metadata)
}

const RootIndexRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const fetchClient = draftModeEnabled ? runDraftQuery : runQuery
  const data = await fetchClient(rootIndexQuery, {})

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <RootPreview initial={data} />
  }

  return <RootIndexBody {...data} />
}

export default RootIndexRoute
