import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends WithStylesProps<typeof styles> {
  id: string
}

const Note: React.FC<IProps> = ({ classes, id }) => {
  return <div className={classes.base}>nota {id}</div>
}

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60,
    minHeight: 'calc(100vh - 60px)',
    background: '#EEE'
  }
}

export default injectSheet(styles)(Note)
