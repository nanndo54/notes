import styles from 'styles/Icon.module.css'

interface Props {
  name: string
  color?: string
  className?: string
}

const Icon = ({ name, color = 'unset', className = '' }: Props) => (
  <svg
    className={`${styles.svg} ${className}`}
    height='100%'
    width='100%'
    viewBox='0 0 1024 1024'
  >
    <path d={name} style={{ fill: color }} />
  </svg>
)

export default Icon
