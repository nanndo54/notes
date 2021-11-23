import Button from 'components/Button'
import { getPlaceholder } from 'constants/placeholders'
import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/NoteForm.module.css'

const NoteForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<Note>()

  const placeholder = getPlaceholder()

  const { handleCreateNote } = useNote()

  const handleSubmitForm: SubmitHandler<Note> = (note) => {
    handleCreateNote(note)
    reset()
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete='off'>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            placeholder={placeholder}
            className={errors.title?.type === 'required' ? 'error-input' : ''}
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <div className='error'>Title is required</div>
          )}
        </div>
        <div>
          <label htmlFor='content'>Content</label>
          <input id='content' {...register('content')} />
        </div>
        <Button variant='primary'>Create note</Button>
      </form>
    </div>
  )
}

export default NoteForm
