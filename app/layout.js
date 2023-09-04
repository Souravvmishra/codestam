import './globals.css'
import { Outfit } from 'next/font/google'

const inter = Outfit({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Codestam Technology',
  description: 'We at Codestam underscores the process of turning abstract concepts into functional, user-friendly software products. It emphasizes the creative transformation of ideas into tangible digital solutions through careful planning, development, and ongoing maintenance, meeting specific needs and ensuring a smooth user experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  ${inter.className} `}>{children}</body>
    </html>
  )
}
