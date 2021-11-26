import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import styles from 'styles/NewNoteButton.module.css'
import { Link } from 'wouter'

const NewNoteButton = () => (
  <Link to='/notes/new' className={styles.base}>
    <div />
    <Icon name={ICONS.PLUS} id='new-button-gradient' />
  </Link>
)

export default NewNoteButton
