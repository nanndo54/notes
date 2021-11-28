import moongose from 'mongoose'
import { Note } from 'notes-types'

const { model, Schema } = moongose

const definition = {
  title: String,
  content: String,
  date: { type: Date, default: () => new Date() },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}

const schema = new Schema<Note>(definition)

schema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.user
  }
})

const NoteModel = model<Note>('Note', schema)

export default NoteModel

export const noteAttributes = Object.keys(definition)
