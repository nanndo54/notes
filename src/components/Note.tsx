import INote from 'models/Note'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'
import { Link } from 'wouter'

interface IProps extends WithStylesProps<typeof styles> {
  note: INote
}

const Note: React.FC<IProps> = ({ classes, note }) => {
  const { id, title, description } = note

  return (
    <Link className={`${classes.base} unselectable`} to={'/note/' + id}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </Link>
  )
}

const styles = {
  base: {
    flexDirection: 'column',
    minWidth: 200,
    minHeight: 200,
    margin: 5,
    padding: 10,
    background: '#449',
    borderBottom: '5px solid #333',
    borderRight: '3px solid #333',
    borderRadius: 8,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  title: {
    padding: '5px 0',
    width: '100%',
    fontSize: 19,
    fontWeight: 500,
    color: '#DDD'
  },
  description: { padding: '5px 0', width: '100%', fontSize: 14, color: '#CCC' }
}

export default injectSheet(styles)(Note)
