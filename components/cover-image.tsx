'use client'

import { useEffect, useRef, useState } from 'react'

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  // If the image is served from cache it may already be complete before React
  // attaches onLoad, so the event never fires. Reconcile against the DOM once
  // mounted, and guard with a natural-width check for broken/empty sources.
  useEffect(() => {
    const img = ref.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <img
      ref={ref}
      src={src || '/placeholder.svg'}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
        loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      }`}
    />
  )
}
