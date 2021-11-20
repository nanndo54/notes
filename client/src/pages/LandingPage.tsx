import Icon from 'components/Icon'
import ICONS from 'constants/Icons'
import styles from 'styles/Landing.module.css'

const Main = () => (
  <div className={styles.base}>
    <Icon name={ICONS.FACEBOOK} />
    <Icon name={ICONS.GOOGLE} />
  </div>
)

export default Main
