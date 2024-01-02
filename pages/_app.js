import '@/styles/globals.css'
import { Html, Head, Main, NextScript } from 'next/document'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
