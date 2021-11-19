import { Application } from 'express'
import { Note } from 'notes-models'

const appRouter = (app: Application) => {
  let notes: Note[] = []

  app.get('/api/notes', (req, res) => res.json(notes))

  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find((note) => note.id === id)

    if (note) return res.json(note)
    return res.status(404).end()
  })

  app.post('/api/notes', (req, res) => {
    const note: Note = req.body
    const id = notes.reduce((acc, note) => (acc === note.id ? acc + 1 : acc), 1)

    const newNote: Note = { ...note, id, date: new Date() }
    notes = [...notes, newNote]

    return res.status(204).end()
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter((note) => note.id !== id)

    return res.status(204).end()
  })

  app.put('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note: Note = req.body
    let index = notes.findIndex((note) => note.id === id)

    const newNote: Note = { ...note, id, date: new Date() }
    notes[index] = newNote

    return res.status(204).end()
  })
}

export default appRouter
