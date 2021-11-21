import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import LandingPage from 'pages/LandingPage'
import LoginPage from 'pages/LoginPage'
import NoteDetailPage from 'pages/NoteDetailPage'
import NotesPage from 'pages/NotesPage'
import { useAppSelector } from 'store'
import styles from 'styles/App.module.css'
import { Route } from 'wouter'

const App = () => {
  const user = useAppSelector((state) => state.user)
  const isUserLoggedIn = user.username !== ''

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <Navbar />
        <Route path='/' component={isUserLoggedIn ? NotesPage : LandingPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/note/:id'>{({ id }) => <NoteDetailPage id={Number(id)} />}</Route>
      </div>
      <Footer />
    </div>
  )
}

export default App
