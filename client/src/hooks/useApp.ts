import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { getNotes } from 'services/noteServices'
import { clearNotes } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useApp() {
  const { isUserLoggedIn } = useUser()
  const { sortBy, direction, offset, needed } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      needed && isUserLoggedIn ? getNotes({ sortBy, direction, offset }) : clearNotes()
    )
  }, [isUserLoggedIn, sortBy, direction, needed])
}

export default useApp
