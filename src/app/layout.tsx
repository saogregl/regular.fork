"use client"

import { SessionProvider } from "next-auth/react"
import '../styles/index.scss';
import { GlobalTheme } from "@carbon/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <SessionProvider>
      <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
