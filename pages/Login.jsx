import { useUserStore } from '../store/userStore'
import { useEffect } from 'react'

const Login = () => {
  const { loginWithWallet } = useUserStore()

  useEffect(() => {
    window.ethereum?.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        if (accounts.length > 0) {
          loginWithWallet(accounts[0])
        }
      })
  }, [loginWithWallet])

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">Connecting Wallet...</h2>
      <p>Please unlock your wallet to continue.</p>
    </div>
  )
}

export default Login