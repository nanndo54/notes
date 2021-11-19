import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import NoteDetail from 'pages/NoteDetail'
import Notes from 'pages/Notes'
import React from 'react'
import styles from 'styles/App.module.css'
import { Route } from 'wouter'

const App = () => {
  return (
    <div className={styles.base}>
      <Navbar />
      <Route path='/' component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/notes' component={Notes} />
      <Route path='/note/:id'>{({ id }) => <NoteDetail id={Number(id)} />}</Route>
      <Footer />
    </div>
  )
}

export default App
