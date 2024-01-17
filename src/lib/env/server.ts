import "server-only"

import { formatErrors } from './client'
import { serverEnvSchema } from './schema'

const serverEnvRaw = {
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN
}

// Parse the env variables provided against the defined schema
const _serverEnv = serverEnvSchema.safeParse(serverEnvRaw)

// Format error
if (!_serverEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_serverEnv.error.format()),
  )
  throw new Error(`Invalid environment variables`)
}

export const serverEnv = _serverEnv.data
