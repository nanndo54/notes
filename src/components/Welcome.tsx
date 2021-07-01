import React from 'react'
import styles from 'styles/Welcome.module.css'

const Welcome = () => {
  return (
    <div className={`${styles.base} unselectable`}>
      <span className='greeting'>Bienvenido de nuevo</span>
    </div>
  )
}

export default Welcome
