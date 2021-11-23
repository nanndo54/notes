import Button from 'components/Button'
import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import useMenu from 'hooks/useMenu'
import useOutsideAlerter from 'hooks/useOutsideAleter'
import useUser from 'hooks/useUser'
import { useRef } from 'react'
import styles from 'styles/NavbarMenu.module.css'
import { Link } from 'wouter'

const links = [
  {
    icon: ICONS.BIN,
    label: 'Home',
    to: '/'
  },
  {
    icon: ICONS.BIN,
    label: 'Profile',
    to: '/profile'
  },
  {
    icon: ICONS.BIN,
    label: 'About',
    to: '/about'
  },
  {
    icon: ICONS.BIN,
    label: 'Contact',
    to: '/contact'
  }
]

const NavbarMenu = () => {
  const { isUserLoggedIn, handleLogoutUser } = useUser()
  const { isMenuOpenned, handleToggleMenu } = useMenu()

  const menuRef = useRef<HTMLDivElement>(null)

  useOutsideAlerter(menuRef, handleToggleMenu, isMenuOpenned)

  return (
    <div ref={menuRef} className={`${styles.base} ${isMenuOpenned ? styles.show : ''}`}>
      <Button
        variant='transparent'
        className={styles.closeButton}
        onClick={handleToggleMenu}
      >
        <Icon name={ICONS.CLOSE} />
      </Button>

      {isUserLoggedIn ? (
        <Button variant='danger' onClick={handleLogoutUser}>
          Log out
        </Button>
      ) : (
        <Link to='/login' onClick={handleToggleMenu}>
          {<Icon name={ICONS.BUBBLE} />}
          Log in
        </Link>
      )}
      {links.map((link) => (
        <Link key={link.label} to={link.to} onClick={handleToggleMenu}>
          {<Icon name={link.icon} />}
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default NavbarMenu
