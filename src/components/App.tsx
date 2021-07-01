import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Main from 'pages/Landing'
import Login from 'pages/Login'
import Note from 'pages/NoteDetail'
import Notes from 'pages/Notes'
import React from 'react'
import styles from 'styles/App.module.css'
import { Route } from 'wouter'

const App = () => {
  return (
    <div className={styles.base}>
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

export default App
