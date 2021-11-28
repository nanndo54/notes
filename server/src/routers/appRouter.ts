import { Router } from 'express'

import notesRouter from './notesRouter.js'
import userRouter from './userRouter.js'

const appRouter = Router()

appRouter.use('/notes', notesRouter)
appRouter.use('/user', userRouter)
appRouter.use('/*', (req, res) => {
  const url = req.originalUrl
  res.status(404).json({
    error: `Endpoint not found: ${req.method}@${url}`
  })
})

export default appRouter
