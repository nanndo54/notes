import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import useApp from 'hooks/useApp'
import useUser from 'hooks/useUser'
import LandingPage from 'pages/LandingPage'
import LoginPage from 'pages/LoginPage'
import NoteDetailPage from 'pages/NoteDetailPage'
import NotesPage from 'pages/NotesPage'
import styles from 'styles/App.module.css'
import { Route } from 'wouter'

const App = () => {
  const { isUserLoggedIn } = useUser()
  useApp()

  return (
    <div className={styles.base}>
      <Navbar />
      <div className={styles.content}>
        <Route path='/' component={isUserLoggedIn ? NotesPage : LandingPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={LoginPage} />
        <Route path='/note/:id'>{({ id }) => <NoteDetailPage id={id} />}</Route>
      </div>
      <Footer />
    </div>
  )
}

export default App
