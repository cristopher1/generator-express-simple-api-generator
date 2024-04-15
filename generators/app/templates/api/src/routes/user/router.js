import Express from 'express'

const router = Express.Router()

// Example function. Remove or replace for a function that obtains user information.
const getUserInfoByEmail = async (email) => {
  const user = {
    email,
    names: 'default user',
    surnames: 'default user',
  }
  return user
}

// Example function. Remove or replace for a function that update data user.
const updateUser = async (email, newUserData) => {
  if (!email) {
    throw new Error('There is not email')
  }
  if (!newUserData) {
    throw new Error('There is not new user data')
  }
  return true
}

router.get('/:userEmail', async (req, res) => {
  const { userEmail } = req.params

  const user = await getUserInfoByEmail(userEmail)

  if (!user) {
    res.sendStatus(404)
    return
  }

  const { email, names, surnames } = user

  res.status(200)
  res.json({
    email,
    names,
    surnames,
  })
})

router.put('/', async (req, res) => {
  const { email } = req.userInfo
  const newUserData = req.body

  const user = await getUserInfoByEmail(email)

  if (!user) {
    res.sendStatus(404)
    return
  }

  await updateUser(email, newUserData)

  res.sendStatus(201)
})

export { router as userRouter }
