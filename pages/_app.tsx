import '@fortawesome/fontawesome-free/css/all.min.css'
import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
