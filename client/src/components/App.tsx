import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Routes from 'components/Routes'
import useApp from 'hooks/useApp'
import styles from 'styles/App.module.css'

const App = () => {
  useApp()

  return (
    <div className={styles.base}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
