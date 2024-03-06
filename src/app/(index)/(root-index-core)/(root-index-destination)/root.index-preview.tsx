'use client'
import { PreviewLoadingErrorHOC } from '@/components/preview/preview-wrapper'

import type { RootIndexQuery } from '../(root-index-server)/root.index-query'
import { rootIndexQuery } from '../(root-index-server)/root.index-query'
import RootIndexBody from './root.index-component'

interface PreviewProps {
  initial: RootIndexQuery
  queryParams?: { slug: string }
}

export function RootPreview(props: PreviewProps) {
  return (
    <PreviewLoadingErrorHOC
      initial={props.initial}
      query={rootIndexQuery.query}
      successFn={(data) => <RootIndexBody {...data} />}
    />
  )
}
