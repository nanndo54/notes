import Button from 'components/Button'
import Icon from 'components/Icon'
import NavbarMenu from 'components/NavbarMenu'
import ICONS from 'constants/icons'
import useNavbarMenu from 'hooks/useNavbarMenu'
import useUser from 'hooks/useUser'
import { FC } from 'react'
import styles from 'styles/Navbar.module.css'
import { Link } from 'wouter'

const Navbar: FC = () => {
  const { isUserLoggedIn } = useUser()
  const { handleToggleMenu } = useNavbarMenu()

  return (
    <nav className={`${styles.base} ${isUserLoggedIn ? styles.loggedIn : ''}`}>
      <NavbarMenu />
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to='/'>notes</Link>
        </div>
        <div className={styles.search}>search</div>
        <Button variant='transparent' onClick={handleToggleMenu}>
          {<Icon name={ICONS.MENU} />}
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
