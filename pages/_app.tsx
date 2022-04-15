import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'

function MyWeb({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto py-5 px-3 xl:px-80">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyWeb
