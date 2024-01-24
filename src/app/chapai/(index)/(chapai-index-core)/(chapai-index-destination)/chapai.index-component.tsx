import type { ChapaiIndexQuery } from "../(chapai-index-server)/chapai.index-query"

interface PageProps {
  data: ChapaiIndexQuery
}
export default function ChapaiIndexBody(props: PageProps) {
  return (
    <div>Chapai: {props.data.title}</div>
  )
}