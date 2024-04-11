import '../styles/style.scss'
import type { AppProps } from 'next/app'
import Wallet from '../components/wallet/Wallet'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wallet>
      <Header />
      <Component {...pageProps} />
      <ToastContainer style={{ fontSize: 14 }} />
    </Wallet>
  )
}

export default MyApp
