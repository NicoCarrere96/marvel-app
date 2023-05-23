import { SearchNav } from ' @/components'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel App',
  description: 'App generated for test Marvel API',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <SearchNav />
        {children}
      </body>
    </html>
  )
}
