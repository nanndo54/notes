import bcrypt from 'bcrypt'
import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { User } from 'notes-types'

import UserModel from '../models/UserModel.js'

const userRouter = Router()

userRouter.post('/', async (req, res) => {
  const user = new UserModel(req.body)

  const foundUser = await UserModel.findOne({ username: user.username })
  if (foundUser) return res.status(400).send({ error: 'username is already in use' })

  const password = await bcrypt.hash(user.password as string, 10)
  user.password = password

  try {
    const savedUser = await user.save()
    res.status(201).send(savedUser)
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
      id: user._id,
      username: user.username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret)

    res.send({ ...user.toJSON(), token })
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.get('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id

  try {
    const user = await UserModel.findById(id)
    if (!user) return res.status(404).send({ error: 'User not found' })

    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.put('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id
  const user: User = req.body

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true })
    if (!updatedUser) return res.status(404).send({ error: 'User not found' })

    res.send(updatedUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

userRouter.delete('/:id([a-z\\d]+)', async (req, res) => {
  const id = req.params.id

  try {
    const user = await UserModel.findByIdAndRemove(id)
    if (!user) return res.status(404).send({ error: 'User not found' })

    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

export default userRouter
