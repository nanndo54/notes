import { useCallback, useRef } from 'react'

function useDebounce(callback: Function, delay: number) {
  const timeout = useRef<any>()

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current)
        callback(...args)
      }

      clearTimeout(timeout.current)
      timeout.current = setTimeout(later, delay)
    },
    [callback, delay]
  )
}

export default useDebounce
