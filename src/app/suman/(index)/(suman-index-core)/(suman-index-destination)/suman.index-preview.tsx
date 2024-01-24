"use client"
import { PreviewLoadingErrorHOC } from '@/components/preview/preview-wrapper'

import type { SumanIndexQuery} from '../(suman-index-server)/suman.index-query';
import { sumanIndexQuery } from '../(suman-index-server)/suman.index-query'
import SumanIndexBody from './suman.index-component'

interface PreviewProps {
  initial: SumanIndexQuery
  queryParams?: { slug: string }
}

export function PreviewHomePage(props: PreviewProps) {
  return (
    <PreviewLoadingErrorHOC
      initial={props.initial}
      query={sumanIndexQuery.query}
      successFn={(data) =>
        <SumanIndexBody data={data} />
      } />
  )
}
