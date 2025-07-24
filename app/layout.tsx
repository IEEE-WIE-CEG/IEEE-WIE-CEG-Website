import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "IEEE WIE-CEG Student Chapter",
  description: "IEEE WIE-CEG Student Chapter Official Website",
  generator: 'v0.dev',
  icons: {
    icon: '/logo3.png',
    shortcut: '/logo3.png',
    apple: '/logo3.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
