import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'
import { initDatabase, connection } from './database'

// init database connection
initDatabase()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/health', (req: Request, res: Response) => {
  if (connection.manager) {
    res.status(200).send()
  } else {
    res.status(500).send()
  }
})

app.use('/api', routes)

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find route ${req.originalUrl} on Server`,
  })
})

export default app
