import styles from 'styles/HomePage.module.css'
import { Link } from 'wouter'

const HomePage = () => (
  <div className={styles.base}>
    <p>Notes is the best app ever.</p>
    <Link to='/notes'>Your notes</Link>
  </div>
)

export default HomePage
