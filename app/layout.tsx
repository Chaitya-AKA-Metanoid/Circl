import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Circl - Discover Local Community Events",
    template: "%s | Circl",
  },
  description:
    "Join your local community and discover amazing events happening near you. Connect with neighbors, explore new interests, and build lasting relationships through Circl.",
  keywords: ["events", "community", "local", "networking", "activities", "meetups", "social"],
  authors: [{ name: "Circl Team" }],
  creator: "Circl",
  publisher: "Circl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Circl - Discover Local Community Events",
    description: "Join your local community and discover amazing events happening near you.",
    url: "/",
    siteName: "Circl",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circl - Discover Local Community Events",
    description: "Join your local community and discover amazing events happening near you.",
    creator: "@circl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
