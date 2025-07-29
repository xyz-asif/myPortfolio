import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Asif Shaik — Senior Flutter Developer",
  description: "Senior Flutter Developer specializing in iOS, Android, and cross-platform mobile applications.",
  keywords: "Flutter Developer, Mobile App Developer, iOS, Android, React Native, Swift, Dart",
  authors: [{ name: "Asif Shaik" }],
  creator: "Asif Shaik",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Asif Shaik — Senior Flutter Developer",
    description: "Senior Flutter Developer specializing in iOS, Android, and cross-platform mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
