import { Providers } from "@/components/providers"
import { cn } from "@/utils"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "PingPanda | SaaS Insights",
  description: "PingPanda is the easiest way to monitor your SaaS.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "PingPanda",
    description: "PingPanda SaaS Insights",
    images: [
      {
        url: "/imag.png",
        width: 1200,
        height: 630,
        alt: "PingPanda Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PingPanda",
    description: "PingPanda SaaS Insights",
    images: ["/imag.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="font-sans bg-brand-50 text-brand-950 antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
