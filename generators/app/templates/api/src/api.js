import Express from 'express'
import bearerToken from 'express-bearer-token'
import logger from 'morgan'
import createHttpError from 'http-errors'
import 'express-async-errors'
import { apiRouter } from './routes/index.js'

const environment = process.env.NODE_ENV

// Api constructor
const api = new Express()

api.use(logger('dev'))
api.use(Express.json())
api.use(Express.urlencoded({ extended: true }))
api.use(bearerToken())

// Routing middleware
api.use('/api/v1', apiRouter)

api.use(async (req, res, next) => {
  next(createHttpError(404))
})

// Handler error
api.use(async (err, req, res, next) => {
  if (err && err.status) {
    res.sendStatus(err.status)
  }

  if (err && !err.status) {
    res.sendStatus(500)
  }

  if (environment === 'development') {
    console.log(err)
  }
})

export default api
