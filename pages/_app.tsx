import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'

function MyWeb({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="container mx-auto px-80 py-5">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyWeb
