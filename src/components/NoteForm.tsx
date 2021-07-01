import { createNote } from 'actions/noteActions'
// import { updateNoteForm } from 'actions/noteFormActions'
import Note from 'models/Note'
// import RootState from 'models/RootState'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import styles from 'styles/NoteForm.module.css'

const NoteForm = () => {
  const { register, handleSubmit, reset } = useForm<Note>()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Note> = (note) => {
    dispatch(createNote(note))
    reset()
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <label htmlFor='title' className={'unselectable'}>
          Title
        </label>
        <input id='title' placeholder='Walk the dog 🐕' {...register('title')} />
        <label htmlFor='description' className={'unselectable'}>
          Description
        </label>
        <input id='description' placeholder="Don't forget" {...register('description')} />
        {/* <div
          id='description'
          className='input-textarea'
          role='textbox'
          contentEditable
          {...register('description')}
        /> */}
        <button>Create note</button>
      </form>
    </div>
  )
}

// TODO: connect form with redux
// connect((state: RootState) => state.noteForm, updateNoteForm)(NoteForm)

export default NoteForm
