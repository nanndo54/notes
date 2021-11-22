import moongose from 'mongoose'
import { Note } from 'notes-types'

const { model, Schema } = moongose

const schema = new Schema<Note>({
  title: { type: String, required: true },
  content: { type: String },
  date: { type: Date, default: Date.now }
})

schema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const NoteModel = model<Note>('Note', schema)

export default NoteModel
