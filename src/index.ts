import express from 'express'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
import mediaRouter from './routes/media.routes'

databaseService.connect()

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
app.use('/medias', mediaRouter)
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
