import { toggleMenu } from 'slices/appSlice'
import { useAppDispatch, useAppSelector } from 'store'

function useNavbarMenu() {
  const { isMenuOpenned } = useAppSelector((state) => state.app)
  const dispatch = useAppDispatch()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return { isMenuOpenned, handleToggleMenu }
}

export default useNavbarMenu
