'use client'

import { useEffect, useState } from 'react'

type Frame = { text: string; hold: number }

function typeInto(frames: Frame[], prefix: string, word: string, speed: number, holdAfter?: number) {
  for (let i = 1; i <= word.length; i++) {
    const isLast = i === word.length
    frames.push({ text: prefix + word.slice(0, i), hold: isLast && holdAfter ? holdAfter : speed })
  }
}

function deleteTo(frames: Frame[], full: string, targetLen: number, speed: number, holdAfter?: number) {
  for (let i = full.length - 1; i >= targetLen; i--) {
    const isLast = i === targetLen
    frames.push({ text: full.slice(0, i), hold: isLast && holdAfter ? holdAfter : speed })
  }
}

// Build one full type -> hold -> delete cycle. When not forced normal, there is
// a 5% chance each of the "JARED" slip, the "JAR Corporate" slip, and an
// "I hate this job" slip, each corrected before settling on the real name.
function buildCycle(forceNormal: boolean): Frame[] {
  const frames: Frame[] = []
  const roll = forceNormal ? 1 : Math.random()

  if (roll < 0.05) {
    // Slip: types "JARED Industries", then frantically wipes and redoes it.
    typeInto(frames, '', 'JAR', 430, 500)
    typeInto(frames, 'JAR', 'ED', 200, 320)
    typeInto(frames, 'JARED', ' Industries', 200, 900)
    deleteTo(frames, 'JARED Industries', 0, 30, 260)
    typeInto(frames, '', 'JAR', 210, 260)
    typeInto(frames, 'JAR', ' Industries', 180, 10000)
    deleteTo(frames, 'JAR Industries', 0, 55, 3000)
  } else if (roll < 0.1) {
    // Slip: types "JAR Corporate", realizes, and swaps in "Industries".
    typeInto(frames, '', 'JAR', 430, 1500)
    typeInto(frames, 'JAR', ' Corporate', 210, 900)
    deleteTo(frames, 'JAR Corporate', 3, 30, 300)
    typeInto(frames, 'JAR', ' Industries', 180, 10000)
    deleteTo(frames, 'JAR Industries', 0, 55, 3000)
  } else if (roll < 0.15) {
    // Slip: absent-mindedly types "I hate this job", catches it, wipes, and
    // types the real name.
    typeInto(frames, '', 'I hate this job', 190, 1400)
    deleteTo(frames, 'I hate this job', 0, 45, 320)
    typeInto(frames, '', 'JAR', 210, 260)
    typeInto(frames, 'JAR', ' Industries', 180, 10000)
    deleteTo(frames, 'JAR Industries', 0, 55, 3000)
  } else {
    // Normal: type "JAR", pause, type " Industries", hold 10s, delete, wait 3s.
    typeInto(frames, '', 'JAR', 430, 1500)
    typeInto(frames, 'JAR', ' Industries', 210, 10000)
    deleteTo(frames, 'JAR Industries', 0, 55, 3000)
  }

  return frames
}

export function TypingTitle() {
  const [frames, setFrames] = useState<Frame[]>(() => buildCycle(true))
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index >= frames.length - 1) {
        setFrames(buildCycle(false))
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, frames[index]?.hold ?? 300)
    return () => clearTimeout(timer)
  }, [index, frames])

  return (
    <h1
      aria-label="JAR Industries"
      className="font-serif text-3xl leading-[1.3] tracking-tight text-beige sm:text-5xl lg:text-6xl"
    >
      <span aria-hidden="true">{frames[index]?.text ?? ''}</span>
      <span
        aria-hidden="true"
        className="animate-blink ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] bg-beige align-baseline"
      />
    </h1>
  )
}
