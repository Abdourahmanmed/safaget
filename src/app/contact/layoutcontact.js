import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import './globals.css'
import BootstrapClient from '@/components/BootstrapClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayoutcontact({ children2 }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='contener2'>
          {children2}
          <BootstrapClient/>
        </div>
      </body>
    </html>
  )
}