import { Application } from 'express'

import notesRouter from './notesRouter.js'
import userRouter from './userRouter.js'

const appRouter = (app: Application) => {
  notesRouter(app)
  userRouter(app)
}

export default appRouter
