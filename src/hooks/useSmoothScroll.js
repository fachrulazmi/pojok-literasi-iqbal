import { useCallback } from 'react'

export default function useSmoothScroll(offset = 0) {
  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    },
    [offset]
  )
  return scrollTo
}
