import { draftMode } from 'next/headers'
import { notFound } from "next/navigation"

import { runDraftQuery, runQuery } from '@/sanity/groqd-client'

import { testIndexQuery } from '../(test-index-server)/test.index-query'
import TestIndexBody from './test.index-component'
import { TestPreview} from './test.index-preview'
import { generatePageMeta } from 'src/shame-utils/generate-page-meta-util'

export const generateMetadata = async () => {
  const data = await runQuery(testIndexQuery, {})
  return generatePageMeta(data?.metadata)
}

const TestIndexRoute = async () => {
  const { isEnabled: draftModeEnabled } = draftMode()
  const fetchClient = draftModeEnabled ? runDraftQuery : runQuery
  const data = await fetchClient(
    testIndexQuery,
    {},
  )

  if (!data) {
    return notFound()
  }

  if (draftModeEnabled) {
    return <TestPreview initial={data} />
  }

  return <TestIndexBody data={data} />
}

export default TestIndexRoute