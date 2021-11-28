import './database.js'

import cors from 'cors'
import express from 'express'
import { Application } from 'express'
import moongose from 'mongoose'
import morgan from 'morgan'
import { AddressInfo } from 'net'
import path from 'path'

import appRouter from './routers/appRouter.js'

const app: Application = express()
app.set('port', process.env.PORT || 3000)

app.use(cors({ origin: 'http://localhost:3001' }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const __dirname = path.resolve()
const dir = path.join(__dirname, 'dist/client')
const assetsDir = path.join(dir, 'assets')

app.use('/api', appRouter)
app.use('/assets', express.static(assetsDir))
app.use('*', express.static(dir))

async function listen() {
  const listener = app.listen(app.get('port'))
  const { address, port } = listener.address() as AddressInfo

  console.log(`Server running on http://${address}:${port}`)

  async function close(signal: String) {
    console.info(`${signal} signal received`)
    console.info('Closing database')
    await moongose.connection.close()
    console.info('Closing http server')
    listener.close((err: Error | undefined) => process.exit(err ? 1 : 0))
  }

  process.on('SIGTERM', () => {
    close('SIGTERM')
  })

  process.on('SIGINT', () => {
    close('SIGINT')
  })
}

listen()
