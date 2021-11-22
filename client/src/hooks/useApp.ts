import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { getNotes } from 'services/notesServices'
import { clearNotes } from 'slices/notesSlice'
import { useAppDispatch } from 'store'

function useApp() {
  const { isUserLoggedIn } = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getNotes())
    } else {
      dispatch(clearNotes())
    }
  }, [isUserLoggedIn])
}

export default useApp
