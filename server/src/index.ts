import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Application } from 'express'
import morgan from 'morgan'
import { AddressInfo } from 'net'
import path from 'path'

import appRouter from './routes.js'

dotenv.config()

const app: Application = express()
app.set('port', process.env.PORT || 3000)

app.use(cors({ origin: 'http://localhost:3001' }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

appRouter(app)

const __dirname = path.resolve()
const dir = path.join(__dirname, 'dist/client')
const assetsDir = path.join(dir, 'assets')

app.use('/assets', express.static(assetsDir))
app.use('*', express.static(dir))

async function listen() {
  const listener = app.listen(app.get('port'))
  const { address, port } = listener.address() as AddressInfo

  console.log(`Server running on http://${address}:${port}`)

  function close(signal: String) {
    console.info(`${signal} signal received`)
    console.log('Closing http server')
    listener.close((err: Error | undefined) => {
      console.info('Http server closed')
      process.exit(err ? 1 : 0)
    })
  }

  process.on('SIGTERM', () => {
    close('SIGTERM')
  })

  process.on('SIGINT', () => {
    close('SIGINT')
  })
}

listen()
