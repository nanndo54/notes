import { RefObject, useEffect, useState } from 'react'

function useIntersectionObserver(ref: RefObject<HTMLElement>, options: any, once = true) {
  const [intersected, setIntersected] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const updateEntry: (arr: any) => void = ([entry]) => {
    setIntersected(entry?.isIntersecting)
    setIntersected(false)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver
    const element = ref?.current

    if (!hasIOSupport || !element || (once && intersected)) return

    const observer = new IntersectionObserver(updateEntry, options)
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, options])

  return intersected
}

export default useIntersectionObserver
