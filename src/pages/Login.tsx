import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

const Login: React.FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  return <div className={classes.base}>quepex</div>
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

export default injectSheet(styles)(Login)
