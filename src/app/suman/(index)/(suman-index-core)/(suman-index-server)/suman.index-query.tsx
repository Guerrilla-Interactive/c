import { q } from 'groqd'

export const dataQuery = q('*')
  .filterByType('suman')
  .slice(0)
  .grab({ title: q.string() })
