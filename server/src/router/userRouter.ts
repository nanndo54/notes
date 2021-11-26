import { Application } from 'express'
import { User } from 'notes-types'

import UserModel from '../models/UserModel.js'

const userRouter = (app: Application) => {
  app.get('/api/user/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    UserModel.findById(id)
      .then((user) => {
        if (!user) return res.status(404).send()
        return res.send(user)
      })
      .catch((err) => res.status(400).send(err))
  })

  app.get(
    '/api/user/login/:username([a-zA-Z\\d]+)&:password([a-zA-Z\\d]+)',
    (req, res) => {
      const { username, password } = req.params
      UserModel.find({ username, password })
        .then((user) => {
          if (!user) return res.status(404).send()
          return res.send(user)
        })
        .catch((err) => res.status(400).send(err))
    }
  )

  app.post('/api/user', (req, res) => {
    const user = new UserModel(req.body)

    UserModel.findOne({ username: user.username })
      .then((foundUser) => {
        if (foundUser)
          return res.status(400).send({ error: 'username is already in use' })

        user
          .save()
          .then((user) => res.status(201).send(user))
          .catch((err) => res.status(400).send(err))
      })
      .catch((err) => res.status(400).send(err))
  })

  app.delete('/api/user/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndRemove(id)
      .then((user) => {
        if (!user) return res.status(404).send()
        return res.send(user)
      })
      .catch((err) => res.status(400).send(err))
  })

  app.put('/api/user/:id([a-z\\d]+)', (req, res) => {
    const id = req.params.id
    const user: User = req.body

    UserModel.findByIdAndUpdate(id, user, { new: true })
      .then((user) => {
        if (!user) return res.status(404).send()
        return res.send(user)
      })
      .catch((err) => res.status(400).send(err))
  })
}

export default userRouter
