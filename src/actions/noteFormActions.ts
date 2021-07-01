import Note from 'models/Note'
// import RootState from 'models/RootState'
// import { Dispatch } from 'react'
// import { MapDispatchToProps } from 'react-redux'

const resetNoteForm = () => ({
  type: '@notes-form/reset'
})

const updateNoteForm = (data: Note) => ({
  type: '@notes-form/update',
  payload: data
})

// const mapDispatchToProps: MapDispatchToProps<> = (dispatch) => ({
//   updateNoteForm: (note: Note) => dispatch(updateNoteForm(note))
// })

export { resetNoteForm, updateNoteForm }
