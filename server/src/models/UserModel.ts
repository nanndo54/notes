import moongose from 'mongoose'
import { User } from 'notes-types'

const { model, Schema } = moongose

const schema = new Schema<User>({
  username: { type: String, required: true, unique: true, dropDups: true, trim: true },
  password: { type: String, trim: true },
  email: { type: String, trim: true },
  photo: String
})

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
