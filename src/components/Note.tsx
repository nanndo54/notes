import INote from 'models/Note'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends INote, WithStylesProps<typeof styles> {}

const Note: React.FC<IProps> = ({ classes, title, description }) => {
  return (
    <div className={classes.base}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 100,
    height: 100,
    background: '#449'
  }
}

export default injectSheet(styles)(Note)
