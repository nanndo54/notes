import Note from 'components/Note'
import useNotes from 'hooks/useNotes'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends WithStylesProps<typeof styles> {}

// TODO: make display:grid

const Notes: React.FC<IProps> = ({ classes }) => {
  const { notes } = useNotes()

  return (
    <div className={classes.base}>
      {notes.map(({ id, title, description }) => (
        <Note key={id} title={title} description={description} />
      ))}
    </div>
  )
}

const styles = {
  base: {
    display: 'grid'
  }
}

export default injectSheet(styles)(Notes)
