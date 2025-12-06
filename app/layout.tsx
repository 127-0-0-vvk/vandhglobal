import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VandhGlobal - Premier Commodity Trading | Minerals & Agri Products',
  description: 'Leading global commodity trading company specializing in minerals (iron ore, bauxite, coal) and agricultural products (rice, spices). Comprehensive due diligence and trusted partnerships.',
  keywords: 'commodity trading, minerals trading, agricultural products, iron ore, bauxite, coal, rice export, spices export, FOB prices, bulk trading',
  icons: {
    icon: '/images/fevicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
