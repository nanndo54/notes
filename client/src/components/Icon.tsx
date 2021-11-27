import { FC } from 'react'
import styles from 'styles/Icon.module.css'

interface Props {
  name: string
  color?: string
  className?: string
  id?: string
}

const Icon: FC<Props> = ({ name, color = 'unset', className = '', id = '' }) => (
  <svg
    className={`${styles.svg} ${className}`}
    height='100%'
    width='100%'
    viewBox='0 0 1024 1024'
  >
    <defs>
      <linearGradient id={id} x1={0} x2={1} y1={0} y2={1}>
        <stop offset='0%' stopColor='var(--color-start)' />
        <stop offset='50%' stopColor='var(--color-middle)' />
        <stop offset='100%' stopColor='var(--color-stop)' />
      </linearGradient>
    </defs>
    <path d={name} style={{ fill: color }} />
  </svg>
)

export default Icon
