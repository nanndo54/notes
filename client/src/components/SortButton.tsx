import Button from 'components/Button'
import styles from 'styles/SortButton.module.css'

const SortButtons = () => (
  <div className={styles.base}>
    <Button variant='transparent'>orden</Button>
    <Button variant='transparent'>asc</Button>
  </div>
)

export default SortButtons
