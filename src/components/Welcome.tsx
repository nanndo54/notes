import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

const Welcome: React.FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  return (
    <div className={`${classes.base} unselectable`}>
      <span className={classes.greeting}>Bienvenido de nuevo</span>
    </div>
  )
}

const styles = {
  base: {
    margin: '40px 0 10px'
  },
  greeting: {
    fontSize: 28,
    fontWeight: 700
  }
}

export default injectSheet(styles)(Welcome)
