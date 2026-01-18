import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lora, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "NatureNest Estates | Premium Farm Plots & Cottages in Telangana",
  description:
    "Discover premium farm plots and resort-style cottages in Kolanupaka & Aleru, Telangana. Your perfect weekend paradise awaits.",
  keywords: "farm plots, cottages, real estate, Telangana, Kolanupaka, Aleru, weekend homes",
  openGraph: {
    title: "NatureNest Estates | Premium Farm Plots & Cottages",
    description: "Own your weekend paradise in nature",
    type: "website",
  },
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#524a3a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${lora.variable} ${cormorant.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
