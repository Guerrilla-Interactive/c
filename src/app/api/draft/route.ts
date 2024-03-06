// ./app/api/draft/route.ts

import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { serverEnv } from '@/lib/env/server.ts'
import { getClient } from '@/sanity/client'

const clientWithToken = getClient({ token: serverEnv.SANITY_API_READ_TOKEN })

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )
  if (!isValid) {
    return new Response(`Invalid secret ${request.url}`, { status: 401 })
  }

  draftMode().enable()
  redirect(redirectTo)
}
