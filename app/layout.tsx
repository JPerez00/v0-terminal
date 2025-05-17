import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'V0 Terminal - A Sleek Terminal-Inspired Developer Portfolio',
  description: 'A stylish portfolio mimicking zsh in iTerm2/Ghostty, built in V0. Features a functional contact form with Resend API and Zod validation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
    lang="en"
    suppressHydrationWarning
    >
      <body className='antialiased'>
        {children}
      </body>
      <Analytics/>
    </html>
  )
}
