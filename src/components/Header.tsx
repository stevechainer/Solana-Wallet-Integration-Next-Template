import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </div>
    </header>
  )
}
