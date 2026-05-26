import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'Ottawa Street Medical Centre | Windsor, ON',
  description: 'Complete medical care under one roof. Mental health, physical health, walk-in services and pharmacy at 1535 Ottawa Street, Windsor, ON.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-body bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  )
}
