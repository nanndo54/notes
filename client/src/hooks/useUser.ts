import { User } from 'notes-types'
import { toggleMenu } from 'slices/appSlice'
import { loginUser, logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useUser() {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const isUserLoggedIn = user.username !== ''

  const handleLoginUser = (user: User) => {
    dispatch(loginUser(user))
  }

  const handleSignupUser = (user: User) => {
    console.log(user)
    // dispatch(signupUser(user))
  }

  const handleLogoutUser = () => {
    dispatch(toggleMenu())
    dispatch(logoutUser())
  }

  return { user, isUserLoggedIn, handleLoginUser, handleLogoutUser, handleSignupUser }
}

export default useUser
