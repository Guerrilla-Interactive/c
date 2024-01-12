import '@/styles/globals.css'

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
      <body>{children}</body>
    </html>
  )
}
