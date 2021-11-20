import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Landing from 'pages/LandingPage'
import Login from 'pages/LoginPage'
import NoteDetail from 'pages/NoteDetailPage'
import Notes from 'pages/NotesPage'
import React from 'react'
import { useAppSelector } from 'store'
import styles from 'styles/App.module.css'
import { Route } from 'wouter'

const App = () => {
  const user = useAppSelector((state) => state.user)
  const isUserLoggedIn = user.username !== ''

  return (
    <div className={styles.base}>
      <Navbar />
      <Route path='/' component={isUserLoggedIn ? Notes : Landing} />
      <Route path='/login' component={Login} />
      <Route path='/note/:id'>{({ id }) => <NoteDetail id={Number(id)} />}</Route>
      <Footer />
    </div>
  )
}

export default App
