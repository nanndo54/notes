import { useEffect } from 'react'
import { setNeededNotes } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useNotesPage() {
  const { needed } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!needed) dispatch(setNeededNotes())
  }, [])
}

export default useNotesPage
