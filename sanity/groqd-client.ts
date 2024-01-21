import { makeSafeQueryRunner } from 'groqd'

import { serverEnv } from '@/lib/env/server'

import { getClient } from './client'

export const runDraftQuery = makeSafeQueryRunner((query, params) =>
  getClient({ token: serverEnv.SANITY_API_READ_TOKEN }).fetch(query, params),
)

export const runQuery = makeSafeQueryRunner((query, params) =>
  getClient().fetch(query, params),
)
