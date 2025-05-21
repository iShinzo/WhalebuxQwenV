import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { bscTestnet } from 'wagmi/chains' // Using BSC Testnet for demo

const chains = [bscTestnet]

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </React.StrictMode>
)