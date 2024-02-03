import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import BootstrapClient from '@/components/BootstrapClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Safajet',
  description: "L'entreprise de l'impression numerique",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='contener'>
          <Navbar />
          {children}
          <BootstrapClient/>
          <Footer />
        </div>
      </body>
    </html>
  )
}