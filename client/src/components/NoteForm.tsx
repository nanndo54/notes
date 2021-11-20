import { Note } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createNote } from 'services/notesServices'
import { useAppDispatch } from 'store'
import styles from 'styles/NoteForm.module.css'

const NoteForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<Note>()

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Note> = (note) => {
    dispatch(createNote(note))
    reset()
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            placeholder='Walk the dog 🐕'
            className={errors.title?.type === 'required' ? 'error-input' : ''}
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <div className='error-msg'>First name is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='content'>Description</label>
          <input id='content' placeholder="Don't forget" {...register('content')} />
        </div>
        <button>Create note</button>
      </form>
    </div>
  )
}

export default NoteForm
