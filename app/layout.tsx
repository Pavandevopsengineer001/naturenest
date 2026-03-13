import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "THE DIVINE FARMS | A New Lifestyle Close to Nature - SRLN Infra Developers",
  description:
    "Experience THE DIVINE FARMS by SRLN Infra Developers near Kolanupaka, Aler. Premium farm plots with natural green environment, perfect for weekend getaway and smart future investment.",
  keywords: "THE DIVINE FARMS, SRLN Infra Developers, farm plots, Kolanupaka, Aler, weekend getaway, nature living, Telangana real estate",
  openGraph: {
    title: "THE DIVINE FARMS | SRLN Infra Developers",
    description: "A New Lifestyle Close to Nature - Near Kolanupaka, Aler",
    type: "website",
  },
  robots: "index, follow",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2d5a3d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${sourceSans.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
