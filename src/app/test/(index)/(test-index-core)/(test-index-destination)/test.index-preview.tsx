"use client"
import { PreviewLoadingErrorHOC } from '@/components/preview/preview-wrapper'

import type { TestIndexQuery} from '../(test-index-server)/test.index-query';
import { testIndexQuery } from '../(test-index-server)/test.index-query'
import TestIndexBody from './test.index-component'

interface PreviewProps {
  initial: TestIndexQuery
  queryParams?: { slug: string }
}

export function TestPreview(props: PreviewProps) {
  return (
    <PreviewLoadingErrorHOC 
	initial={props.initial}
	query={ testIndexQuery.query} 
	successFn={(data) =>
		<TestIndexBody data={data} />}
	/>
  )
}
