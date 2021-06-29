import useNotes from 'hooks/useNotes'
import Note from 'models/Note'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends WithStylesProps<typeof styles> {}

// TODO: change component name
// TODO: make title required

const Form: React.FC<IProps> = ({ classes }) => {
  const { register, setValue, handleSubmit } = useForm<Note>()
  const { newNote } = useNotes()

  const onSubmit: SubmitHandler<Note> = (data) => {
    newNote(data)
    setValue('title', '')
    setValue('description', '')
  }

  return (
    <div className={classes.base}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={classes.title} placeholder="Add a note" {...register('title')} />
        <div>
          <input
            className={classes.body}
            placeholder="Description of the note"
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
    width: '80vw',
    margin: '20px 0'
  },
  title: {
    width: '100%',
    padding: '10px 7px'
  },
  body: {
    width: '100%',
    padding: '10px 7px'
  },
  send: {
    width: '100%',
    padding: '10px 7px'
  }
}

export default injectSheet(styles)(Form)
