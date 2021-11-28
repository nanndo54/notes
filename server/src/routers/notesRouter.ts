import { Router } from 'express'
import jwt from 'jsonwebtoken'
import moongose from 'mongoose'
import { Note } from 'notes-types'

import NoteModel, { noteAttributes } from '../models/NoteModel.js'
import UserModel from '../models/UserModel.js'

const notesRouter = Router()

notesRouter.use((req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if (!authorization || !authorization.toLowerCase().startsWith('bearer '))
      throw new Error()

    const token = authorization.substring(7)
    const sign = process.env.JWT_SECRET as jwt.Secret

    const decodedToken = jwt.verify(token, sign) as jwt.JwtPayload
    if (!decodedToken || !decodedToken.id) throw new Error()

    req.payload = decodedToken

    next()
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' })
  }
})

notesRouter.get('/(:sortBy([a-zA-Z]+))&(:dir(-?1))/:offset(\\d+)?', async (req, res) => {
  const sortBy = req.params.sortBy || 'date'
  const dir = Number(req.params.dir) || -1
  const offset = Number(req.params.offset) || 0

  if (!noteAttributes.includes(sortBy))
    return res.status(400).send({ error: 'Invalid attribute to sort by' })

  try {
    const user = req.payload.id
    const notes = await NoteModel.find({ user })
      .skip(offset)
      .limit(10)
      .sort({ [sortBy]: dir })

    console.log(notes)

    res.send(notes)
  } catch (err) {
    res.status(400).send(err)
  }
})

notesRouter.get('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id
  if (!id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).send({ error: 'Invalid id' })

  try {
    const user = req.payload.id

    const note = await NoteModel.findOne({ id, user })
    if (!note) return res.status(404).send({ error: 'Note not found' })

    return res.send(note)
  } catch (err) {
    res.status(400).send(err)
  }
})

notesRouter.post('/', async (req, res) => {
  const note = new NoteModel(req.body)

  try {
    const userId = req.payload.id
    note.user = userId

    const savedNote = await note.save()

    const user = await UserModel.findById(userId)
    if (!user) return res.status(404).send({ error: 'User not found' })

    user.notes = user.notes?.concat(savedNote._id)
    await user.save()

    res.status(201).send(savedNote)
  } catch (err) {
    res.status(400).send(err)
  }
})

notesRouter.post('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id
  if (!id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).send({ error: 'Invalid id' })

  try {
    const user = req.payload.id

    const note = await NoteModel.findOne({ id, user })
    if (!note) return res.status(404).send({ error: 'Note not found' })

    note._id = new moongose.Types.ObjectId()
    note.date = new Date()
    note.isNew = true

    const savedNote = await note.save()
    res.status(201).send(savedNote)
  } catch (err) {
    res.status(400).send(err)
  }
})

notesRouter.delete('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id
  if (!id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).send({ error: 'Invalid id' })

  try {
    const user = req.payload.id

    const noteToRemove = await NoteModel.findOne({ id, user })
    if (!noteToRemove) return res.status(404).send({ error: 'Note not found' })

    await noteToRemove.remove()
    return res.send(noteToRemove)
  } catch (err) {
    res.status(400).send(err)
  }
})

notesRouter.put('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id
  if (!id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).send({ error: 'Invalid id' })

  const note: Note = req.body
  note.date = new Date()

  try {
    const user = req.payload.id

    const noteToUpdate = await NoteModel.findOne({ id, user })
    if (!noteToUpdate) return res.status(404).send({ error: 'Note not found' })
    if (noteToUpdate.user?.toString() !== user)
      return res.status(401).send({ error: 'Unauthorized' })

    await noteToUpdate.updateOne(note, { new: true })
    res.send(note)
  } catch (err) {
    res.status(400).send(err)
  }
})

export default notesRouter
