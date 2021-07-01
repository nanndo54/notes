import React from 'react'
import styles from 'styles/Icon.module.css'

interface Props {
  name: string
  size?: number
  color?: string
}

const Icon = ({ name, size = 20, color = 'unset' }: Props) => {
  const pathStyle = { fill: color }

  return (
    <svg
      className={styles.svg}
      height={`${size}px`}
      width={`${size}px`}
      viewBox='0 0 1024 1024'
    >
      <path d={name} style={pathStyle} />
    </svg>
  )
}

export default Icon
