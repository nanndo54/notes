import { Application } from 'express'
import { Note } from 'notes-types'

import NoteModel from '../models/NoteModel.js'

const notesRouter = (app: Application) => {
  app.get('/api/notes/(:sortby([a-z]+))?&?(:dir(-?1))?', (req, res) => {
    const sortby = req.params.sortby || 'date'
    const dir = Number(req.params.dir) || -1

    NoteModel.find({})
      .sort({ [sortby]: dir })
      .then((notes) => res.send(notes))
      .catch((err) => res.status(400).send(err))
  })

  app.get('/api/notes/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    NoteModel.findById(id)
      .then((note) => {
        if (!note) return res.status(404).send()
        return res.send(note)
      })
      .catch((err) => res.status(400).send(err))
  })

  app.post('/api/notes', (req, res) => {
    const note = new NoteModel(req.body)
    note
      .save()
      .then((note) => res.status(201).send(note))
      .catch((err) => res.status(400).send(err))
  })

  app.delete('/api/notes/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    NoteModel.findByIdAndRemove(id)
      .then((note) => {
        if (!note) return res.status(404).send()
        return res.send(note)
      })
      .catch((err) => res.status(400).send(err))
  })

  app.put('/api/notes/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    const note: Note = req.body
    note.date = new Date()

    NoteModel.findByIdAndUpdate(id, note, { new: true })
      .then((note) => {
        if (!note) return res.status(404).send()
        return res.send(note)
      })
      .catch((err) => res.status(400).send(err))
  })
}

export default notesRouter
