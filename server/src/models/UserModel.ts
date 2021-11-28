import moongose from 'mongoose'
import { User } from 'notes-types'

const { model, Schema } = moongose

const definition = {
  username: { type: String, required: true, unique: true, dropDups: true, trim: true },
  password: { type: String, trim: true },
  email: { type: String, trim: true },
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  photo: String
}

const schema = new Schema<User>(definition)

schema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.password
  }
})

const UserModel = model<User>('User', schema)

export default UserModel

export const userAttributes = Object.keys(definition)
