import Button from 'components/Button'
import useNote from 'hooks/useNote'
import useNoteDetails from 'hooks/useNoteDetails'
import { Note } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/NoteDetailPage.module.css'

interface Props {
  id: string
}

const NoteDetailPage = ({ id }: Props) => {
  const { handleUpdateNote } = useNote()

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue
  } = useForm<Note>()

  const note = useNoteDetails(id, setValue)

  const handleSubmitForm: SubmitHandler<Note> = (newNote) => {
    newNote.date = new Date()
    newNote.id = id
    handleUpdateNote(newNote)
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete='off'>
        <div className='control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            placeholder={note?.title}
            className={errors.title?.type === 'required' ? 'error-input' : ''}
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <div className='error-msg'>Title is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='content'>Content</label>
          <input id='content' {...register('content')} />
        </div>
        <Button variant='primary'>Update note</Button>
      </form>
    </div>
  )
}

export default NoteDetailPage
