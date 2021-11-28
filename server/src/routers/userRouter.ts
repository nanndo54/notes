import bcrypt from 'bcrypt'
import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { User } from 'notes-types'

import authenticationMiddleware from '../middlewares/authenticationMiddleware.js'
import UserModel from '../models/UserModel.js'

const userRouter = Router()

userRouter.post('/', async (req, res) => {
  const user = new UserModel(req.body)

  const foundUser = await UserModel.findOne({ username: user.username })
  if (foundUser) return res.status(400).send({ error: 'username is already in use' })

  const password = await bcrypt.hash(user.password as string, 10)
  user.password = password

  try {
    await user.save()
    res.status(201).send()
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserModel.findOne({ username })
    if (!user) return res.status(401).send({ error: 'User or password not correct' })

    const isPasswordCorrect = await bcrypt.compare(password, user.password as string)
    if (!isPasswordCorrect)
      return res.status(401).send({ error: 'User or password not correct' })

    const payload = {
      id: user._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret)

    res.send({ token })
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.get('/', authenticationMiddleware, async (req, res) => {
  const userId = req.payload.id

  try {
    const user = await UserModel.findById(userId)
    if (!user) return res.status(404).send({ error: 'User not found' })

    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.put('/', authenticationMiddleware, async (req, res) => {
  const user: User = req.body
  const userId = req.payload.id

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, user, { new: true })
    if (!updatedUser) return res.status(404).send({ error: 'User not found' })

    res.send(updatedUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.delete('/', async (req, res) => {
  const userId = req.payload.id

  try {
    const user = await UserModel.findByIdAndRemove(userId)
    if (!user) return res.status(404).send({ error: 'User not found' })

    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

export default userRouter
