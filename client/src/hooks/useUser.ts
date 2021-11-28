import { User } from 'notes-types'
import { toast } from 'react-toastify'
import { createUser, loginUser } from 'services/userServices'
import { toggleMenu } from 'slices/appSlice'
import { logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'
import { useLocation } from 'wouter'

function useUser() {
  const [, setLocation] = useLocation()
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const isUserLoggedIn = !!user.token

  const handleLoginUser = (user: User) => {
    dispatch(loginUser(user))
      .then(() => {
        toast.success('Login successful')
        setLocation('/')
      })
      .catch(() => {
        toast.error('Login failed')
      })
  }

  const handleSignupUser = (user: User) => {
    dispatch(createUser(user))
      .then(() => {
        toast.success('User created successfully!\nNow sign in')
        setLocation('/login')
      })
      .catch(() => {
        toast.error('User creation failed')
      })
  }

  const handleLogoutUser = () => {
    dispatch(toggleMenu())
    dispatch(logoutUser())
    setLocation('/')
  }

  return { user, isUserLoggedIn, handleLoginUser, handleLogoutUser, handleSignupUser }
}

export default useUser
