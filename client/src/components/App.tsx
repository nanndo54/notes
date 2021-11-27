import AppRoutes from 'components/AppRoutes'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import Navbar from 'components/Navbar'
import ICONS from 'constants/icons'
import useApp from 'hooks/useApp'
import { FC } from 'react'
import { Flip, ToastContainer } from 'react-toastify'
import styles from 'styles/App.module.css'

const App: FC = () => {
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
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
