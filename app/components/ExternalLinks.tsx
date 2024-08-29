'use client'

import { useEffect } from 'react'

export default function ExternalLinks() {
  useEffect(() => {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
      if (link.hostname !== window.location.hostname && !link.classList.contains('external-link')) {
        link.classList.add('external-link')
      }
    })
  }, [])

  return null
}