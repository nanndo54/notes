import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { useLocation } from 'wouter'

function useNoteDetails(id: string, setValue: UseFormSetValue<Note>) {
  const [note, setNote] = useState<Note>()
  const [, setLocation] = useLocation()

  const { loading, handleGetNote } = useNote()

  useEffect(() => {
    if (loading) return

    const note = handleGetNote(id)
    setNote(note)

    if (!note) setLocation('/notes')

    setValue('title', note?.title || '')
    setValue('content', note?.content || '')
  }, [loading])

  return note
}

export default useNoteDetails
