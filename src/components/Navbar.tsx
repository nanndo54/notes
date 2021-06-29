import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

interface IProps extends WithStylesProps<typeof styles> {}

const Navbar: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.base}>
      <div>menu</div>
      <div>logo</div>
      <div>foto</div>
    </div>
  )
}

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    top: '0',
    width: '90vw',
    height: '50px',
    background: '#EEE',
    boxShadow: '0 0 7px #888',
    zIndex: 10
  }
}

export default injectSheet(styles)(Navbar)
