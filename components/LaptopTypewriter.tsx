'use client'
import { useEffect, useRef } from 'react'

const LINES = [
  '"What if it works?"',
  'git commit -m "ship it"',
  'const answer = build(idea)',
  'while(true) { learn() }',
  'python mywiki find "second brain"',
  '"What if it works?"',
  'agents.run(question)',
  'make && ./a.out',
  '"What if it works?"',
]

export default function LaptopTypewriter() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    let lineIdx = 0
    let charIdx = 0
    let deleting = false
    let pauseTicks = 0
    let timer: ReturnType<typeof setTimeout>

    function step() {
      if (!el) return
      const line = LINES[lineIdx]

      if (pauseTicks > 0) {
        pauseTicks--
        timer = setTimeout(step, 60)
        return
      }

      if (!deleting) {
        charIdx++
        el.innerHTML = line.slice(0, charIdx) + '<span class="tw-cursor"></span>'
        if (charIdx === line.length) {
          deleting = true
          pauseTicks = line.includes('"What if it works?"') ? 38 : 22
          timer = setTimeout(step, 60)
        } else {
          timer = setTimeout(step, charIdx === 1 ? 200 : 55 + Math.random() * 35)
        }
      } else {
        charIdx--
        el.innerHTML = line.slice(0, charIdx) + '<span class="tw-cursor"></span>'
        if (charIdx === 0) {
          deleting = false
          lineIdx = (lineIdx + 1) % LINES.length
          pauseTicks = 4
          timer = setTimeout(step, 60)
        } else {
          timer = setTimeout(step, 28)
        }
      }
    }

    timer = setTimeout(step, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-[340px] md:max-w-[420px]">
      <div
        className="bg-[#1A1A1A] border-2 border-[#2A2A2A] rounded-t-[10px] p-3"
        style={{ aspectRatio: '16/10' }}
      >
        <div className="bg-[#0A0A0A] rounded-[4px] h-full flex flex-col justify-center px-4 py-4 md:px-5 md:py-5 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)',
            }}
          />
          <p className="font-mono text-[9px] md:text-[11px] text-[#3A3A3A] mb-2 relative z-20">
            <span className="text-accent">abdessalam</span>@portfolio:~$
          </p>
          <div
            ref={textRef}
            className="font-mono text-[11px] md:text-[13px] text-primary whitespace-nowrap min-h-[16px] md:min-h-[20px] relative z-20"
          />
        </div>
      </div>
      <div className="bg-[#222222] rounded-b-[12px] h-[14px] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-1 w-[60px] h-[4px] bg-[#2A2A2A] rounded" />
      </div>
      <div className="bg-[#1A1A1A] h-[6px] rounded-b-[8px] mx-2.5" />
    </div>
  )
}
