import './globals.css'
import { Inter } from 'next/font/google'
import "coughdrop/coughdrop.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EnzymeAI',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
