import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config/jwt.js'

const { JWTSecret, JWTAlgorithm } = config

// Example function. Remove or replace for the real function to get user info.
const getUserInfo = async (email, password) => {
  const userInfo = {
    email,
    password,
  }
  return userInfo
}

/** @type {import('express').RequestHandler} */
const obtainToken = async (req, res) => {
  const { email, password } = req.body
  const userInfo = await getUserInfo(email, password)
  const token = jwt.sign(userInfo, JWTSecret, { algorithm: JWTAlgorithm })
  res.status(200)
  res.json({
    token,
  })
}

const router = express.Router()

router.post('/', obtainToken)

export { router as tokenRouter }
