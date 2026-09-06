'use client'

import { useEffect, useState } from 'react'

const WORD1 = 'JAR'
const WORD2 = ' Industries'
const FULL = WORD1 + WORD2

type Frame = { text: string; hold: number }

function buildFrames(): Frame[] {
  const frames: Frame[] = []
  // Gradually type "JAR", then pause on the word.
  for (let i = 1; i <= WORD1.length; i++) {
    frames.push({ text: WORD1.slice(0, i), hold: i === WORD1.length ? 1500 : 430 })
  }
  // Continue typing " Industries", then hold the full title for 10s.
  for (let i = 1; i <= WORD2.length; i++) {
    frames.push({ text: WORD1 + WORD2.slice(0, i), hold: i === WORD2.length ? 10000 : 210 })
  }
  // Delete everything, then wait 3s before restarting.
  for (let i = FULL.length - 1; i >= 0; i--) {
    frames.push({ text: FULL.slice(0, i), hold: i === 0 ? 3000 : 55 })
  }
  return frames
}

const FRAMES = buildFrames()

export function TypingTitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % FRAMES.length)
    }, FRAMES[index].hold)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <h1
      aria-label="JAR Industries"
      className="font-serif text-3xl tracking-tight text-beige sm:text-5xl lg:text-6xl"
    >
      <span aria-hidden="true">{FRAMES[index].text}</span>
      <span
        aria-hidden="true"
        className="animate-blink ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] bg-beige align-baseline"
      />
    </h1>
  )
}
