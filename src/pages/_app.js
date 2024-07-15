import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dushyant Bhutiyani | Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`} >
        <Navbar />
        <Component {...pageProps} />
      </main >
    </>
  )
}
