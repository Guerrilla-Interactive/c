import { z } from 'zod'

// We define the client and server side env variable schemas
// and validate them using zod during runtime to prevent running
// the project when necessary env variables aren't provided.

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
})
