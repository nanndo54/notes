import Note from 'components/Note'
import INote from 'models/Note'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'
import { useSelector } from 'react-redux'

interface IProps extends WithStylesProps<typeof styles> {}

const Notes: React.FC<IProps> = ({ classes }) => {
  const notes = useSelector((state: INote[]) => state)

  return (
    <div className={classes.base}>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

const styles = {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)'
  }
}

export default injectSheet(styles)(Notes)
