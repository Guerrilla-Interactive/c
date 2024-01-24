'use client'

import { useLiveQuery } from 'next-sanity/preview'

type DataComponentFn<T> = (data: T) => JSX.Element

interface PreviewLoadingErrorHOCProps<T> {
  initial: T
  query: string
  slug?: string
  queryParams?: Record<string, string | Array<string>>
  successFn: DataComponentFn<T>
}
export function PreviewLoadingErrorHOC<T>(
  props: PreviewLoadingErrorHOCProps<T>,
) {
  const [data, loading] = useLiveQuery<T>(props.initial, props.query, {
    slug: props.slug,
  })
  if (data) return props.successFn(data)
  if (loading) return <div>loading...</div>
  console.error('data', data)
  return <div>no data, check console for error details</div>
}
