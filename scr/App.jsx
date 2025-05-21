import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import MiningPanel from './components/MiningPanel'
import ReferralMarket from './components/ReferralMarket'
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="min-h-screen bg-matrixBlack text-matrixGreen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mining" element={<MiningPanel />} />
        <Route path="/referrals" element={<ReferralMarket />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App