import { makeSafeQueryRunner } from 'groqd'

import { getClient } from './client'

export const runQuery = makeSafeQueryRunner((query, params, token) =>
  getClient({ token }).fetch(query, params),
)
