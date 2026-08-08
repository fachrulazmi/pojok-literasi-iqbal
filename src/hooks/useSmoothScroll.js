import { useCallback } from 'react'

export default function useSmoothScroll(offset = 64) {
  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    },
    [offset],
  )

  return scrollTo
}