import Button from 'components/Button'
import useNote from 'hooks/useNote'
import { Note } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/NoteDetailPage.module.css'

interface Props {
  id: string
}

const NoteDetail = ({ id }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<Note>()

  const { handleGetNote, handleUpdateNote } = useNote()

  const note = handleGetNote(id)

  const handleSubmitForm: SubmitHandler<Note> = (note) => {
    handleUpdateNote(note)
    reset()
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete='off'>
        <div className='control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            placeholder={note?.title}
            defaultValue={note?.title}
            className={errors.title?.type === 'required' ? 'error-input' : ''}
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <div className='error-msg'>First name is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='content'>Description</label>
          <input id='content' defaultValue={note?.content} {...register('content')} />
        </div>
        <Button variant='primary'>Update note</Button>
      </form>
    </div>
  )
}

export default NoteDetail
