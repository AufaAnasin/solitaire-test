import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solitaire',
  description: 'IndoTech Solutions is a leading software development company based in Jakarta, Indonesia. We specialize in providing innovative software solutions tailored to meet the unique needs of businesses across various industries. With a dedicated team of highly skilled developers and a strong commitment to quality, we have established ourselves as a trusted partner for software development projects, both domestically and internationally.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
