import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({ src: '../fonts/Montserrat-VariableFont_wght.ttf' })

export const metadata = {
  title: 'Algorithmic Malcolm X',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
