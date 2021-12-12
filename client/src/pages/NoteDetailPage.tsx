import { getPlaceholder } from 'constants/placeholders'
import useDebounce from 'hooks/useDebounce'
import useNote from 'hooks/useNote'
import useNoteDetails from 'hooks/useNoteDetails'
import { Note } from 'notes-types'
import { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import styles from 'styles/NoteDetailPage.module.css'

interface Props {
  id: string
}

const NoteDetailPage: FC<Props> = ({ id: initialId }) => {
  const placeholder = useMemo(getPlaceholder, [])

  const { register, getValues, setValue, setFocus } = useForm<Note>()

  const id = useNoteDetails(initialId, (note) => {
    setValue('title', note.title)
    setValue('content', note.content)
    setFocus('title')
  })

  const { handleUpdateNote } = useNote()

  const handleChangeForm = useDebounce(() => {
    const note = getValues()
    note.id = id
    handleUpdateNote(note)
  }, 1000)

  return (
    <div className={styles.base}>
      {/* <BackButton /> */}
      <form onChange={handleChangeForm} autoComplete='off'>
        <div className={styles.note}>
          <TextareaAutosize
            className={styles.title}
            placeholder={placeholder}
            maxRows={3}
            {...register('title')}
          />
          <textarea
            className={styles.content}
            placeholder='Start writing'
            {...register('content')}
          />
        </div>
      </form>
    </div>
  )
}

export default NoteDetailPage
