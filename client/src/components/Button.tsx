import { ButtonHTMLAttributes, FC } from 'react'
import styles from 'styles/Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'transparent'
}

const Button: FC<Props> = ({
  className = '',
  children,
  variant = 'secondary',
  ...props
}) => (
  <button className={`${styles.base} ${styles[variant]} ${className}`} {...props}>
    {children}
  </button>
)

export default Button
