import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import { FC } from 'react'
import styles from 'styles/NewNoteButton.module.css'
import { Link } from 'wouter'

const NewNoteButton: FC = () => (
  <Link to='/notes/new' className={styles.base}>
    <div />
    <Icon name={ICONS.PLUS} id='new-button-gradient' />
  </Link>
)

export default NewNoteButton
