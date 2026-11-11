import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Anh Chau · Web Developer',
  description:
    'Anh Chau, web developer in Greater London. Accessible WordPress and React websites for membership organisations, B2B platforms and small businesses.',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#2d3250',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
