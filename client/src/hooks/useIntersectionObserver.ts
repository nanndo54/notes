import { RefObject, useEffect, useState } from 'react'

function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: any,
  fallback: boolean,
  once = true
) {
  const [intersected, setIntersected] = useState(!fallback)

  // eslint-disable-next-line no-unused-vars
  const updateEntry: (arr: any) => void = ([entry]) => {
    setIntersected(entry?.isIntersecting)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver
    const node = ref?.current

    if (!hasIOSupport || !node || (once && intersected)) return

    const observer = new IntersectionObserver(updateEntry, options)
    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, options])

  return intersected
}

export default useIntersectionObserver
