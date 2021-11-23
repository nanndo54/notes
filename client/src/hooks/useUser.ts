import { User } from 'notes-types'
import { toast } from 'react-toastify'
import { toggleMenu } from 'slices/appSlice'
import { loginUser, logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'
import { useLocation } from 'wouter'

function useUser() {
  const [, setLocation] = useLocation()
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const isUserLoggedIn = user.username !== ''

  const handleLoginUser = (user: User) => {
    dispatch(loginUser(user))
  }

  const handleSignupUser = (user: User) => {
    console.log(user)
    // dispatch(signupUser(user))
    toast.success('User created successfully!\nNow sign in')
    setLocation('/login')
  }

  const handleLogoutUser = () => {
    dispatch(toggleMenu())
    dispatch(logoutUser())
    setLocation('/')
  }

  return { user, isUserLoggedIn, handleLoginUser, handleLogoutUser, handleSignupUser }
}

export default useUser
