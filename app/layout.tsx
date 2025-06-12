import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pet Shop - Cuidamos do seu Pet com Amor",
  description: "Serviços completos para seu animal de estimação: banho e tosa, hotel resort, adestramento e pet care.",
  keywords: "pet shop, banho e tosa, hotel para pets, adestramento, veterinário",
  authors: [{ name: "Pet Shop Team" }],
  openGraph: {
    title: "Pet Shop - Cuidamos do seu Pet com Amor",
    description: "Serviços completos para seu animal de estimação",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  )
}
