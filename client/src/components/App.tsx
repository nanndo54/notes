import Content from 'components/Content'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import useApp from 'hooks/useApp'
import styles from 'styles/App.module.css'

const App = () => {
  useApp()

  return (
    <div className={styles.base}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
