const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const FoldersService = require('./folders-service')
// const { getAnyValidationError } = require('./notes-validator')

const foldersRouter = express.Router()
const bodyParser = express.json()

const serializeFolders = folders => ({
  id: folders.id,
  name: xss(folders.name),
})

// const foldersdb = req.app.get('db')

foldersRouter
  .route('/')

  .get((req, res, next) => {
    const foldersdb = req.app.get('db')
    FoldersService.getAllFolders(foldersdb)
    .then(folders => {
      res.json(folders.map(serializeFolders))
    })
    .catch(next)
  })

  .post(bodyParser, (req, res, next) => {
    const foldersdb = req.app.get('db')
    const { name } = req.body
    const newFolders = { name }
    console.log(name, newFolders)


    if (!name) {
      logger.error(`${name} is required`)
      return res.status(400).send({
        error: { message: `'${name}' is required` }
      })
    }

    // const error = getAnyValidationError(newAny)

    // if (error) return res.status(400).send(error)

    FoldersService.insertFolders(foldersdb, newFolders)
      .then(folders => {
        logger.info(`Any with id ${folders.id} created.`)
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `${folders.id}`))
          .json(serializeFolders(folders))
      })
      .catch(next)
  })

  foldersRouter
    .route('/:folders_id')

    .all((req, res, next) => {
      const foldersdb = req.app.get('db')
      const { folders_id } = req.params
      FoldersService.getById(foldersdb, folders_id)
        .then(folders => {
          if (!folders) {
            logger.error(`Any with id ${folders_id} not found.`)
            return res.status(404).json({
              error: { message: `Any Not Found` }
            })
          }
          res.folders = folders
          next()
        })
        .catch(next)
    })

    .get((req, res) => {
      res.json(serializeFolders(res.folders))
    })

    .delete((req, res, next) => {
      const foldersdb = req.app.get('db')
      const { folders_id } = req.params
      FoldersService.deleteFolders(foldersdb, folders_id)
        .then(() => {
          logger.info(`Any with id ${folders_id} deleted.`)
          res.status(204).end()
        })
        .catch(next)
      })

    .patch(bodyParser, (req, res, next) => {
      const foldersdb = req.app.get('db')
      const { name } = req.body
      const newFolders = { name }

      const numberOfValues = Object.values(newFolders).filter(Boolean).length
      if (numberOfValues === 0) {
        logger.error(`Invalid update without required fields`)
        return res.status(400).json({
          error: {
            message: `Request body must contain a 'name'.`
          }
        })
      }

      // const error = getAnyValidationError(newAny)
      if (error) return res.status(400).send(error)
      const { folders_id } = req.params

      FoldersService.updateFolders(foldersdb, folders_id, newFolders)
        .then(() => {
          res.status(204).end()
        })
        .catch(next)

    })

    module.exports = foldersRouter