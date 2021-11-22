import { RefObject, useEffect } from 'react'

function useOutsideAlerter(
  ref: RefObject<any>,
  callback: () => void,
  condition: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && condition && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, condition])
}

export default useOutsideAlerter
