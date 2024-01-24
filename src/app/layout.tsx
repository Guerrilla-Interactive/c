import '@/styles/globals.css'

import { draftMode } from 'next/headers'

import PreviewProvider from '@/components/preview/preview-provider'
import VisualEditing from '@/components/preview/visual-editing'
import { serverEnv } from '@/lib/env/server'

export const metadata = {
  title: 'c',
  description: 'clean starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {draftMode().isEnabled ? (
        <PreviewProvider token={serverEnv.SANITY_API_READ_TOKEN}>
          <body>{children}</body>
        </PreviewProvider>
      ) : (
        <body>{children}</body>
      )}
      {draftMode().isEnabled && <VisualEditing />}
    </html>
  )
}
