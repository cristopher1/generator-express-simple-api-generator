import Express from 'express'

const router = Express.Router()

// Example function. Remove or replace for a function that creates a user.
const createUser = async (user) => {
  if (!user) {
    throw new Error('There is not user')
  }
  return true
}

router.post('/', async (req, res) => {
  const user = req.body

  await createUser(user)

  res.sendStatus(201)
})

export { router as registerRouter }
