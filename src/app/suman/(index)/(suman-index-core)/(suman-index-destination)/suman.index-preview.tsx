'use client'
import { useLiveQuery } from 'next-sanity/preview'

import { dataQuery } from '../(suman-index-server)/suman.index-query'

interface PreviewProps {
  initial: PageData
}

interface PageData {
  title: string
}

export function PreviewHomePage(props: PreviewProps) {
  const [data, loadingData] = useLiveQuery<PageData>(props.initial, dataQuery)
  return (
    <div>
      Preview - {data.title} - {loadingData ? 'loading' : ''}
    </div>
  )
}
