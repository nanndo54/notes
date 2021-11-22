import { getPhraseByHour } from 'constants/phrases'
import styles from 'styles/Welcome.module.css'

const Welcome = () => {
  const phrase = getPhraseByHour()
  return (
    <div className={styles.base}>
      <h1>{phrase}</h1>
    </div>
  )
}

export default Welcome
