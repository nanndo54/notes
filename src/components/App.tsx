import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

import Form from './Form'
import Navbar from './Navbar'
import Notes from './Notes'

interface IProps extends WithStylesProps<typeof styles> {}

const App: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.base}>
      <Navbar />
      <Form />
      <Notes />
    </div>
  )
}

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    minHeight: 'calc(100vh - 60px)',
    background: '#EEE'
  }
}

export default injectSheet(styles)(App)
