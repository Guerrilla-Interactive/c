import { createClient, type SanityClient } from 'next-sanity'

import { clientEnv } from '@/lib/env/client'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION,
    
    useCdn: false,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl: '/studio',
    }
  })
  if (preview?.token) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      stega:  preview?.token ? true : false,
      
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
