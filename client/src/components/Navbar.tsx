import React from 'react'
import styles from 'styles/Navbar.module.css'
import { Link } from 'wouter'

const Navbar = () => (
  <div className={styles.base}>
    <div>menu</div>
    <div>logo</div>
    <Link to='/login'>log in</Link>
  </div>
)

export default Navbar
