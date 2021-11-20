import { logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/Navbar.module.css'
import { Link } from 'wouter'

const Navbar = () => {
  const user = useAppSelector((state) => state.user)
  const userIsLoggedIn = user.username !== ''

  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className={styles.base}>
      <div>menu</div>
      <div>logo</div>
      {userIsLoggedIn ? (
        <button onClick={handleLogout}>log out</button>
      ) : (
        <Link to='/login'>log in</Link>
      )}
    </div>
  )
}

export default Navbar
