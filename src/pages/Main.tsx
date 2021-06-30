import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'
import { Link } from 'wouter'

const Main: React.FC<WithStylesProps<typeof styles>> = () => {
  return (
    <>
      <Link to='notes'>Notas</Link>
    </>
  )
}

const styles = {}

export default injectSheet(styles)(Main)
