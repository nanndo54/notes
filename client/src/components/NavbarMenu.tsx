import Button from 'components/Button'
import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import { links, loggedInLinks } from 'constants/links'
import useNavbarMenu from 'hooks/useNavbarMenu'
import useOutsideAlerter from 'hooks/useOutsideAleter'
import useUser from 'hooks/useUser'
import { useRef } from 'react'
import styles from 'styles/NavbarMenu.module.css'
import { Link } from 'wouter'

const NavbarMenu = () => {
  const { isUserLoggedIn, handleLogoutUser } = useUser()
  const { isMenuOpenned, handleToggleMenu } = useNavbarMenu()

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
        <>
          <Button variant='danger' onClick={handleLogoutUser}>
            Log out
          </Button>
          {loggedInLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={handleToggleMenu}>
              {<Icon name={link.icon} />}
              {link.label}
            </Link>
          ))}
        </>
      ) : (
        links.map((link) => (
          <Link key={link.label} to={link.to} onClick={handleToggleMenu}>
            {<Icon name={link.icon} />}
            {link.label}
          </Link>
        ))
      )}
    </div>
  )
}

export default NavbarMenu
