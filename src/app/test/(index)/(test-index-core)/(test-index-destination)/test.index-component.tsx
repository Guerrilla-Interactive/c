import type { TestIndexQuery } from "../(test-index-server)/test.index-query"

interface PageProps {
  data: TestIndexQuery
}
export default function TestIndexBody(props: PageProps) {
  return (
    <div>Test: {props.data.title}</div>
  )
}