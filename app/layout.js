import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Ремонт под ключ в Минске',
  description: 'Профессиональный ремонт в Минске. Качественные услуги по ремонту квартир, домов и офисов. Гарантия качества и надежности. Звоните нам для бесплатной консультации!',
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
