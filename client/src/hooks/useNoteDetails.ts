import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { useEffect } from 'react'
import { useLocation } from 'wouter'

// eslint-disable-next-line no-unused-vars
function useNoteDetails(id: string, callback: (note: Note) => void) {
  const [, setLocation] = useLocation()
  const { loading, handleGetNote, handleCreateNote } = useNote()

  useEffect(() => {
    if (loading) return

    if (id === 'new') {
      handleCreateNote().then((note) => setLocation(`/notes/${note.id}`))
      return
    }

    handleGetNote(id)
      .then((note) => callback(note))
      .catch(() => setLocation('/notes'))
  }, [loading])
}

export default useNoteDetails
