import useUser from 'hooks/useUser'
import HomePage from 'pages/HomePage'
import LandingPage from 'pages/LandingPage'
import LoginPage from 'pages/LoginPage'
import NoteDetailPage from 'pages/NoteDetailPage'
import NotesPage from 'pages/NotesPage'
import styles from 'styles/Content.module.css'
import { Redirect, Route, Switch } from 'wouter'

const Routes = () => {
  const { isUserLoggedIn } = useUser()

  const routes = [
    {
      path: '/',
      component: <HomePage />,
      condition: isUserLoggedIn,
      alternativeComponent: <LandingPage />
    },
    {
      path: '/notes',
      component: <NotesPage />,
      condition: isUserLoggedIn,
      alternativeComponent: <Redirect to='/login' />
    },
    {
      path: '/login',
      component: <LoginPage />,
      condition: !isUserLoggedIn,
      alternativeComponent: <Redirect to='/' />
    },
    {
      path: '/signup',
      component: <LoginPage />,
      condition: !isUserLoggedIn,
      alternativeComponent: <Redirect to='/' />
    },
    {
      path: '/notes/:id',
      component: ({ id }: { id: string }) => <NoteDetailPage id={id} />,
      condition: isUserLoggedIn,
      alternativeComponent: <Redirect to='/login' />
    },
    {
      path: '/:page',
      component: ({ page }: { page: string }) =>
        `404, Sorry the page ${page} does not exist!`,
      condition: isUserLoggedIn,
      alternativeComponent: ({ page }: { page: string }) =>
        `404, Sorry the page ${page} does not exist! login first`
    }
  ]

  return (
    <div className={styles.base}>
      <Switch>
        {
          routes.map(({ path, component, condition, alternativeComponent }) => (
            <Route key={path} path={path}>
              {condition ? component : alternativeComponent}
            </Route>
          )) as any
        }
      </Switch>
    </div>
  )
}

export default Routes
