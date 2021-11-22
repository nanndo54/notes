import Button from 'components/Button'
import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/NoteDetailPage.module.css'

interface Props {
  id: string
}

const NoteDetail = ({ id }: Props) => {
  const { handleGetNote, handleUpdateNote } = useNote()
  const note = handleGetNote(id)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue
  } = useForm<Note>({
    defaultValues: note
  })

  const handleSubmitForm: SubmitHandler<Note> = (newNote) => {
    newNote.date = new Date()
    newNote.id = id
    handleUpdateNote(newNote)
  }

  useEffect(() => {
    setValue('title', note?.title || '')
    setValue('content', note?.content)
  }, [note])

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

export default NoteDetail
