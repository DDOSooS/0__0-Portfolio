'use client'
import { useEffect, useRef } from 'react'

interface Props {
  size?: number
}

export default function LogoCanvas({ size = 52 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    const W = size, H = size
    const cx = W / 2, cy = H / 2
    const a = size * 0.26
    const b = size * 0.155
    const TRAIL = Math.floor(size * 0.5)
    const SPEED = 0.042
    let t = 0
    let raf: number

    function lemniscate(angle: number) {
      const d = 1 + Math.sin(angle) ** 2
      return {
        x: cx + (a * Math.cos(angle)) / d,
        y: cy + (b * Math.sin(angle) * Math.cos(angle)) / d,
      }
    }

    function drawHead(p: { x: number; y: number }, angle: number) {
      const next = lemniscate(angle + 0.01)
      const dx = next.x - p.x
      const dy = next.y - p.y
      const len = Math.sqrt(dx * dx + dy * dy) || 1
      const ux = dx / len
      const uy = dy / len
      const nx = -uy
      const ny = ux
      const headR = size * 0.065
      const eyeOff = headR * 0.35
      const eyeR = headR * 0.22

      // Head body
      ctx.beginPath()
      ctx.ellipse(
        p.x + ux * headR * 0.3,
        p.y + uy * headR * 0.3,
        headR,
        headR * 0.78,
        Math.atan2(uy, ux),
        0,
        Math.PI * 2
      )
      ctx.fillStyle = '#00C2A8'
      ctx.fill()

      // Glow ring
      ctx.beginPath()
      ctx.ellipse(
        p.x + ux * headR * 0.3,
        p.y + uy * headR * 0.3,
        headR * 1.35,
        headR * 0.85,
        Math.atan2(uy, ux),
        0,
        Math.PI * 2
      )
      ctx.strokeStyle = 'rgba(0,194,168,0.18)'
      ctx.lineWidth = size * 0.018
      ctx.stroke()

      // Eyes
      const eye1x = p.x + ux * headR * 0.5 + nx * eyeOff
      const eye1y = p.y + uy * headR * 0.5 + ny * eyeOff
      const eye2x = p.x + ux * headR * 0.5 - nx * eyeOff
      const eye2y = p.y + uy * headR * 0.5 - ny * eyeOff

      ctx.beginPath()
      ctx.arc(eye1x, eye1y, eyeR, 0, Math.PI * 2)
      ctx.fillStyle = '#0C0C0C'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(eye2x, eye2y, eyeR, 0, Math.PI * 2)
      ctx.fillStyle = '#0C0C0C'
      ctx.fill()

      // Eye highlights
      ctx.beginPath()
      ctx.arc(eye1x + eyeR * 0.25, eye1y - eyeR * 0.25, eyeR * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(eye2x + eyeR * 0.25, eye2y - eyeR * 0.25, eyeR * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.fill()

      // Forked tongue
      const tongueLen = headR * 0.9
      const forkSpread = headR * 0.28
      const forkStartX = p.x + ux * (headR * 1.0 + tongueLen * 0.55)
      const forkStartY = p.y + uy * (headR * 1.0 + tongueLen * 0.55)
      const tipX = p.x + ux * (headR * 1.0 + tongueLen)
      const tipY = p.y + uy * (headR * 1.0 + tongueLen)

      ctx.beginPath()
      ctx.moveTo(p.x + ux * headR * 1.0, p.y + uy * headR * 1.0)
      ctx.lineTo(forkStartX, forkStartY)
      ctx.strokeStyle = '#FF6B8A'
      ctx.lineWidth = size * 0.013
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(forkStartX, forkStartY)
      ctx.lineTo(tipX + nx * forkSpread, tipY + ny * forkSpread)
      ctx.strokeStyle = '#FF6B8A'
      ctx.lineWidth = size * 0.011
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(forkStartX, forkStartY)
      ctx.lineTo(tipX - nx * forkSpread, tipY - ny * forkSpread)
      ctx.strokeStyle = '#FF6B8A'
      ctx.lineWidth = size * 0.011
      ctx.stroke()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (let i = TRAIL; i >= 1; i--) {
        const pt = lemniscate(t - i * 0.07)
        const progress = 1 - i / TRAIL
        const alpha = progress * 0.75
        const r = size * 0.038 * (0.3 + progress * 0.7)
        const scale = 0.55 + progress * 0.45
        const g = Math.floor(progress * 194 + (1 - progress) * 100)
        const bl = Math.floor(168 * progress)

        ctx.beginPath()
        ctx.ellipse(pt.x, pt.y, r * scale, r * 0.75 * scale, 0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,${g},${bl},${alpha.toFixed(2)})`
        ctx.fill()

        if (i < TRAIL * 0.6 && i % 3 === 0) {
          ctx.beginPath()
          ctx.ellipse(pt.x, pt.y, r * scale * 1.6, r * scale * 1.6, 0, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(0,194,168,${(alpha * 0.12).toFixed(2)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      drawHead(lemniscate(t), t)
      t += SPEED
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={ref} width={size} height={size} />
}
