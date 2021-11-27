import useUser from 'hooks/useUser'
import { FC } from 'react'
import styles from 'styles/NotFoundPage.module.css'
import { Link } from 'wouter'

interface Props {
  page: String
}

const NotFoundPage: FC<Props> = ({ page }) => {
  const { isUserLoggedIn } = useUser()

  return (
    <div className={styles.base}>
      <p>Page {`'${page}'`} not found</p>
      {isUserLoggedIn ? (
        <Link to='/notes'>Go to notes</Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  )
}

export default NotFoundPage
