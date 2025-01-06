import '@/styles/globals.css'

import { draftMode } from 'next/headers'
import { GlobalContextProvider } from 'src/context/global-context'
import { NextgenContextStatusPanel } from 'src/context/nextgen-context-status-panel/nextgen-context-status-panel'

import PreviewProvider from '@/components/preview/preview-provider'
import VisualEditing from '@/components/preview/visual-editing'
import { serverEnv } from '@/lib/env/server'

export const metadata = {
  title: 'c',
  description: 'clean starter',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="min-w-screen min-h-screen bg-[#0a0a0a] text-white"
      lang="en"
    >
      <GlobalContextProvider>
        {(await draftMode()).isEnabled ? (
          <PreviewProvider token={serverEnv.SANITY_API_READ_TOKEN}>
            <body>{children}</body>
          </PreviewProvider>
        ) : (
          <>
            <body>{children}</body>
          </>
        )}
        {(await draftMode()).isEnabled && <VisualEditing />}
      </GlobalContextProvider>
    </html>
  )
}
