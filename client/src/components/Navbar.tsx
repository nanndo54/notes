import Icon from 'components/Icon'
import ICONS from 'constants/Icons'
import { useState } from 'react'
import { logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/Navbar.module.css'
import { Link } from 'wouter'

const Navbar = () => {
  const user = useAppSelector((state) => state.user)
  const isUserLoggedIn = user.username !== ''

  const [menuVisible, setMenuVisible] = useState(false)

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div className={`${styles.base} ${isUserLoggedIn ? styles.loggedIn : ''}`}>
      <NavbarMenu show={menuVisible} />
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to='/'>Logo</Link>
        </div>
        <div className={styles.search}>search</div>
        <button className={styles.dropdownButton} onClick={handleToggleMenu}>
          {<Icon name={ICONS.MENU} />}
        </button>
      </div>
    </div>
  )
}

const NavbarMenu = ({ show = false }) => {
  const user = useAppSelector((state) => state.user)
  const userIsLoggedIn = user.username !== ''

  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className={`${styles.menu} ${show ? styles.show : ''}`}>
      {userIsLoggedIn ? (
        <button onClick={handleLogout}>log out</button>
      ) : (
        <Link to='/login'>log in</Link>
      )}
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
    </div>
  )
}

export default Navbar
