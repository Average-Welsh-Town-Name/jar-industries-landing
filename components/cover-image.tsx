'use client'

import { useState } from 'react'

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src || '/placeholder.svg'}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
        loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    />
  )
}
