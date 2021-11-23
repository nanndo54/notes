import Content from 'components/Content'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import Navbar from 'components/Navbar'
import ICONS from 'constants/icons'
import useApp from 'hooks/useApp'
import { Flip, ToastContainer } from 'react-toastify'
import styles from 'styles/App.module.css'

const App = () => {
  useApp()

  return (
    <div className={styles.base}>
      <ToastContainer
        toastClassName={styles.notification}
        bodyClassName={styles.notificationText}
        closeButton={<Icon name={ICONS.CLOSE} />}
        limit={3}
        newestOnTop
        position='bottom-center'
        transition={Flip}
      />
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
