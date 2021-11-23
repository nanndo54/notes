import styles from 'styles/LandingPage.module.css'
import { Link } from 'wouter'

const LandingPage = () => (
  <div className={styles.base}>
    <p>Notes is the best app ever.</p>
    <Link to='/about'>About notes</Link>
    <Link to='/login'>Sign in</Link>
    <Link to='/signup'>Sign up</Link>
  </div>
)

export default LandingPage
