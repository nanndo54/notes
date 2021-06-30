import Login from 'pages/Login'
import Main from 'pages/Main'
import Note from 'pages/Note'
import Notes from 'pages/Notes'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'
import { Route } from 'wouter'

import Footer from './Footer'
import Navbar from './Navbar'

const App: React.FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  return (
    <div className={classes.base}>
      <Navbar />
      <Route path='/'>
        <Main />
      </Route>
      <Route path='/notes'>
        <Notes />
      </Route>
      <Route path='/note/:id'>{({ id }) => <Note id={id} />}</Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Footer />
    </div>
  )
}

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '70px 40px 50px',
    minHeight: 'calc(100vh - 120px)',
    background: '#EEE'
  }
}

export default injectSheet(styles)(App)
