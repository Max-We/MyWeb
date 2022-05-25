import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'

function MyWeb({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar></Navbar>
      <div className="container mx-auto py-5 px-3 xl:px-80">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyWeb
