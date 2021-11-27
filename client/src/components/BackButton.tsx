import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import { FC } from 'react'
import styles from 'styles/BackButton.module.css'
import { Link } from 'wouter'

const BackButton: FC = () => (
  <Link to='.' className={styles.base}>
    <div />
    <Icon name={ICONS.BACK} />
  </Link>
)

export default BackButton
