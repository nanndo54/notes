import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

// eslint-disable-next-line no-unused-vars
function useNoteDetails(initialId: string, callback: (note: Note) => void) {
  const [id, setId] = useState(initialId)
  const [, setLocation] = useLocation()
  const { loading, handleGetNote, handleCreateNote } = useNote()

  useEffect(() => {
    if (loading) return

    if (initialId === 'new') {
      handleCreateNote().then((note) => {
        history.replaceState({ new: note.id }, '', `/notes/${note.id}`)
        setId(note.id)
        // setLocation(`/notes/${note.id}`)
      })
      return
    }

    handleGetNote(initialId)
      .then((note) => callback(note))
      .catch(() => setLocation('/notes'))
  }, [loading])

  return id
}

export default useNoteDetails
