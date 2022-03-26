import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'

function MyWeb({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyWeb
