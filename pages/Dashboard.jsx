import { useUserStore } from '../store/userStore'
import MiningPanel from '../components/MiningPanel'
import ReferralMarket from '../components/ReferralMarket'

const Dashboard = () => {
  const { coinBalance, wbuxBalance } = useUserStore()

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Wallet</h2>
      <p>$COINS: {coinBalance}</p>
      <p>$WBUX: {wbuxBalance.toFixed(2)}</p>

      <hr className="my-6 border-matrixGreen" />

      <h2 className="text-2xl mb-4">Mining Panel</h2>
      <MiningPanel />

      <hr className="my-6 border-matrixGreen" />

      <h2 className="text-2xl mb-4">Referral Market</h2>
      <ReferralMarket />
    </div>
  )
}

export default Dashboard