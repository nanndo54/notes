import styles from 'styles/Footer.module.css'
import { Link } from 'wouter'

const Footer = () => (
  <footer className={styles.base}>
    <ul className={styles.section}>
      <li className={styles.item}>
        <Link to='/'>About</Link>
      </li>
      <li className={styles.item}>
        <Link to='/'>Contact</Link>
      </li>
    </ul>
    <ul className={styles.section}>
      <li className={styles.item}>
        <Link to='/'>pabloc54</Link>
      </li>
      <li className={styles.item}>
        <Link to='/'>Open source</Link>
      </li>
    </ul>
  </footer>
)

export default Footer
