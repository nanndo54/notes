import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends WithStylesProps<typeof styles> {}

const Footer: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.base}>
      <div>pabloc54</div>
    </div>
  )
}

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: 0,
    height: 35,
    width: '100vw',
    background: '#222',
    color: '#EEE',
    zIndex: -1
  }
}

export default injectSheet(styles)(Footer)
