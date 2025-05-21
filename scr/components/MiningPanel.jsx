import { useState } from 'react'
import { useUserStore } from '../../store/userStore'

const MiningPanel = () => {
  const [timeLeft, setTimeLeft] = useState(180)
  const [mining, setMining] = useState(false)
  const { coinBalance, updateBalances } = useUserStore()

  const startMining = () => {
    if (mining) return
    setMining(true)
    let timer = 180
    const interval = setInterval(() => {
      timer--
      setTimeLeft(timer)
      if (timer <= 0) {
        clearInterval(interval)
        setMining(false)
        updateBalances(coinBalance + 100, useUserStore.getState().wbuxBalance)
      }
    }, 1000)
  }

  return (
    <div>
      <p>Mining Timer: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
      <button onClick={startMining} disabled={mining} className="px-4 py-2 bg-matrixGreen text-black rounded">
        {mining ? 'Mining...' : 'Start Mining'}
      </button>
    </div>
  )
}

export default MiningPanel