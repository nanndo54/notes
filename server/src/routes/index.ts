import { Application } from 'express'

import notesRouter from './notes.js'

const appRouter = (app: Application) => {
  notesRouter(app)
}

export default appRouter
