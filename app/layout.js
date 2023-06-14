import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joseph Peiris',
  description: 'Joseph Peiris UX/UI Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
<link
  rel="apple-touch-icon"
  href="/apple-icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body className={inter.className}>
       <div style={{backgroundColor: 'var(--background-start-rgb)', color: 'var(--foreground-rgb)'}}>
        <Header/>
        <div className='pt-20 sm:pt-32'>
          {children}
          </div>
        <Footer/>
        </div>
      </body>
    </html>
  )
}
