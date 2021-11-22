import { toggleMenu } from 'slices/appSlice'
import { logoutUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useUser() {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const isUserLoggedIn = user.username !== ''

  const handleLogout = () => {
    dispatch(toggleMenu())
    dispatch(logoutUser())
  }

  return { user, isUserLoggedIn, handleLogout }
}

export default useUser
