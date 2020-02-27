require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { NODE_ENV, API_TOKEN } = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')
const notesRouter = require('./notes/notes-router')
const foldersRouter = require('./folders/folders-router')


const app = express()

app
  .use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
  }))
  .use(helmet())
  .use(cors())
  .use(validateBearerToken)
  .use(express.json())
  .use('/api/notes', notesRouter)
  .use('/api/folders', foldersRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use(errorHandler)

module.exports = app