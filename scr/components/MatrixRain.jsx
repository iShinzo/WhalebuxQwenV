import React, { useEffect } from 'react'

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas')
    const ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    const letters = '01'.repeat(10).split('')
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0F0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  return (
    <canvas id="matrixCanvas" className="fixed top-0 left-0 w-full h-full z-[-1]" />
  )
}

export default MatrixRain