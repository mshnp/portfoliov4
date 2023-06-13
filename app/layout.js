import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mishean',
  description: 'Mishean Peiris UX/UI Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
