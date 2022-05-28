import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'
import { ThemeProvider } from 'next-themes'
import DarkModeToggle from 'components/darkmode/darkmode-toggle'
import Head from 'next/head'

function MyWeb({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ThemeProvider attribute="class">
        <Navbar></Navbar>
        <DarkModeToggle />
        <div className="container mx-auto py-5 px-3 xl:px-80">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyWeb
