import type { SumanIndexQuery } from "../(suman-index-server)/suman.index-query"

interface PageProps {
  data: SumanIndexQuery
}
export default function SumanIndexBody(props: PageProps) {
  return (
    <div>Suman: {props.data.title}</div>
  )
}
