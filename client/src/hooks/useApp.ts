import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { getNotes } from 'services/noteServices'
import { getUser } from 'services/userServices'
import { clearNotes } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useApp() {
  const { isUserLoggedIn } = useUser()
  const { sortBy, direction, offset, needed } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isUserLoggedIn) return

    dispatch(getUser())
  }, [isUserLoggedIn])

  useEffect(() => {
    dispatch(
      needed && isUserLoggedIn ? getNotes({ sortBy, direction, offset }) : clearNotes()
    )
  }, [isUserLoggedIn, sortBy, direction, needed])
}

export default useApp
