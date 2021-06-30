import NoteForm from 'components/NoteForm'
import Notes from 'components/Notes'
import Welcome from 'components/Welcome'
import React from 'react'
import injectSheet, { WithStylesProps } from 'react-jss'

// eslint-disable-next-line no-unused-vars
const Main: React.FC<WithStylesProps<typeof styles>> = ({ classes }) => {
  return (
    <>
      <Welcome />
      <NoteForm />
      <Notes />
    </>
  )
}

const styles = {}

export default injectSheet(styles)(Main)
