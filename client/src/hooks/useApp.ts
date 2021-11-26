import useUser from 'hooks/useUser'
import { useEffect } from 'react'
import { getNotes } from 'services/noteServices'
import { clearNotes } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useApp() {
  const { isUserLoggedIn } = useUser()
  const { sortby, direction } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(isUserLoggedIn ? getNotes({ sortby, direction }) : clearNotes())
  }, [isUserLoggedIn, sortby, direction])
}

export default useApp
