"use client"
import { PreviewLoadingErrorHOC } from '@/components/preview/preview-wrapper'

import type { ChapaiIndexQuery} from '../(chapai-index-server)/chapai.index-query';
import { chapaiIndexQuery } from '../(chapai-index-server)/chapai.index-query'
import ChapaiIndexBody from './chapai.index-component'

interface PreviewProps {
  initial: ChapaiIndexQuery
  queryParams?: { slug: string }
}

export function ChapaiPreview(props: PreviewProps) {
  return (
    <PreviewLoadingErrorHOC 
	initial={props.initial}
	query={ chapaiIndexQuery.query} 
	successFn={(data) =>
		<ChapaiIndexBody data={data} />}
	/>
  )
}
