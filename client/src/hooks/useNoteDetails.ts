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

    const note = handleGetNote(id)
    if (note) return callback(note)

    if (id !== 'new') return setLocation('/notes')

    handleCreateNote()
      .unwrap()
      .then((note) => setLocation(`/notes/${note.id}`))
  }, [loading])
}

export default useNoteDetails
