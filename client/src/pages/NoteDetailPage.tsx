import { Note } from 'notes-models'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { addNote } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/NoteDetail.module.css'

interface Props {
  id: number
}

const NoteDetail = ({ id }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<Note>()

  const dispatch = useAppDispatch()

  const note = useAppSelector((state) => state.notes).find((note) => note.id === id)

  const onSubmit: SubmitHandler<Note> = (note) => {
    dispatch(addNote(note))
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
            value={note?.title}
            className={errors.title?.type === 'required' ? 'error-input' : ''}
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <div className='error-msg'>First name is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='details'>Description</label>
          <input
            id='details'
            placeholder="Don't forget"
            value={note?.details}
            {...register('details')}
          />
        </div>
        <button>Update note</button>
      </form>
    </div>
  )
}

export default NoteDetail
