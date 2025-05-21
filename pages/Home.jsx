import MatrixRain from '../components/MatrixRain'

const Home = () => {
  return (
    <>
      <MatrixRain />
      <div className="text-center pt-20">
        <h1 className="text-4xl">🌊 Welcome to WhaleBux</h1>
        <p className="mt-4">Start mining $COINS and earn real crypto rewards.</p>
        <a href="/dashboard" className="inline-block mt-4 px-6 py-2 bg-matrixGreen text-black rounded hover:bg-green-400">Go to Dashboard</a>
      </div>
    </>
  )
}

export default Home