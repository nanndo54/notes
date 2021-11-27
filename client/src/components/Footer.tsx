import { FC } from 'react'
import styles from 'styles/Footer.module.css'
import { Link } from 'wouter'

const Footer: FC = () => (
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
        <a href='https://github.com/pabloc54'>pabloc54</a>
      </li>
      <li className={styles.item}>
        <a href='https://github.com/pabloc54/notes'>Open source</a>
      </li>
    </ul>
  </footer>
)

export default Footer
