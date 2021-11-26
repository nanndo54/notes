import { getPlaceholder } from 'constants/placeholders'
import useDebounce from 'hooks/useDebounce'
import useNote from 'hooks/useNote'
import useNoteDetails from 'hooks/useNoteDetails'
import { Note } from 'notes-types'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { toast } from 'react-toastify'
import styles from 'styles/NoteDetailPage.module.css'

interface Props {
  id: string
}

const NoteDetailPage = ({ id }: Props) => {
  const placeholder = useMemo(getPlaceholder, [])

  const { register, getValues, setValue } = useForm<Note>()

  useNoteDetails(id, (note) => {
    setValue('title', note.title)
    setValue('content', note.content)
  })

  const { handleUpdateNote } = useNote()

  const handleChangeForm = useDebounce(() => {
    const note = getValues()
    note.id = id

    handleUpdateNote(note).then(() => toast.success('Note updated'))
  }, 1000)

  return (
    <form onChange={handleChangeForm} autoComplete='off'>
      <div className={styles.base}>
        <TextareaAutosize
          className={styles.title}
          placeholder={placeholder}
          maxRows={3}
          {...register('title')}
        />
        <textarea
          className={styles.content}
          placeholder='content'
          {...register('content')}
        />
      </div>
    </form>
  )
}

export default NoteDetailPage
