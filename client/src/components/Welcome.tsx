import { getPhraseByHour } from 'constants/phrases'
import { FC } from 'react'
import styles from 'styles/Welcome.module.css'

const Welcome: FC = () => {
  const phrase = getPhraseByHour()
  return (
    <div className={styles.base}>
      <h1>{phrase}</h1>
    </div>
  )
}

export default Welcome
