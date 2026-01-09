import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-raleway',
})

export const metadata = {
  title: 'Anh Chau - Full-Stack Developer',
  description: 'Portfolio of Anh Chau, Full-Stack Developer specializing in web applications and digital services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}