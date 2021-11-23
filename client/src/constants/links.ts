import ICONS from 'constants/icons'

const links = [
  {
    icon: ICONS.LOGIN,
    label: 'Sign in',
    to: '/login'
  },
  {
    icon: ICONS.SIGNUP,
    label: 'Sign up',
    to: '/signup'
  },
  {
    icon: ICONS.LOGIN,
    label: 'About',
    to: '/about'
  },
  {
    icon: ICONS.SIGNUP,
    label: 'Contact',
    to: '/contact'
  }
]

const loggedInLinks = [
  {
    icon: ICONS.HOME,
    label: 'Home',
    to: '/'
  },
  {
    icon: ICONS.HOME,
    label: 'Notes',
    to: '/notes'
  },
  {
    icon: ICONS.PROFILE,
    label: 'Profile',
    to: '/profile'
  },
  {
    icon: ICONS.LOGIN,
    label: 'About',
    to: '/about'
  },
  {
    icon: ICONS.SIGNUP,
    label: 'Contact',
    to: '/contact'
  }
]

export { links, loggedInLinks }
