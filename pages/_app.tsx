import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyWeb({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyWeb
