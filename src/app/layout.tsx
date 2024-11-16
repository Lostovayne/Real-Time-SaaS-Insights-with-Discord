import { cn } from "@/utils"
import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import { Providers } from "./components/providers"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "PingPanda",
  description: "PingPanda SaaS Insights",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <body className="font-sans bg-brand-50 text-brand-950 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
