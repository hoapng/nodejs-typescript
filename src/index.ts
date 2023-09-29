import express from 'express'
import databaseService from './services/database.service'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
