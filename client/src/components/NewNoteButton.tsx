import Button from 'components/Button'
import Icon from 'components/Icon'
import ICONS from 'constants/icons'
import styles from 'styles/NewNoteButton.module.css'

const NewNoteButton = () => (
  <Button className={styles.base}>
    <Icon name={ICONS.PLUS} id='new-button-gradient' />
  </Button>
)

export default NewNoteButton
