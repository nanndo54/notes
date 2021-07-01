import Icon from 'components/Icon'
import ICONS from 'constants/Icons'
import React from 'react'
import styles from 'styles/Landing.module.css'
import { Link } from 'wouter'

const Main = () => {
  return (
    <>
      <Link to='/notes'>Notas</Link>
      <Icon name={ICONS.FACEBOOK} />
      <Icon name={ICONS.GOOGLE} />
    </>
  )
}

export default Main
