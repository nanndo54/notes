import { createNote } from 'actions/noteActions'
import Note from 'models/Note'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import injectSheet, { WithStylesProps } from 'react-jss'
import { useDispatch } from 'react-redux'

interface IProps extends WithStylesProps<typeof styles> {}

// TODO: make title required

const NoteForm: React.FC<IProps> = ({ classes }) => {
  const { register, setValue, handleSubmit } = useForm<Note>()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Note> = (note) => {
    dispatch(createNote(note))
    setValue('title', '')
    setValue('description', '')
  }

  return (
    <div className={classes.base}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <label htmlFor='title' className={`${classes.label} unselectable`}>
          Title
        </label>
        <input
          id='title'
          className='input-text'
          placeholder='Walk the dog 🐕'
          {...register('title')}
        />
        <div>
          <label htmlFor='description' className={`${classes.label} unselectable`}>
            Description
          </label>
          <div
            id='description'
            className='input-textarea'
            role='textbox'
            contentEditable
            {...register('description')}
          />
          <button className={classes.send}>Create note</button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  base: {
    width: '100%',
    margin: '40px 0'
  },
  label: { margin: '0 0 4px 15px', fontSize: 12, color: '#777' },
  send: {
    width: '100%',
    padding: '10px 7px'
  }
}

export default injectSheet(styles)(NoteForm)
