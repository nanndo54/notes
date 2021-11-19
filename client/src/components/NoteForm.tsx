import { createNote } from 'actions/noteActions'
import { Note } from 'notes-models'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
          <label htmlFor='title' className={'unselectable'}>
            Title
          </label>
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
          <label htmlFor='details' className={'unselectable'}>
            Description
          </label>
          <input id='details' placeholder="Don't forget" {...register('details')} />
        </div>
        <button>Create note</button>
      </form>
    </div>
  )
}

export default NoteForm
