import Express from 'express'
import { tokenRouter } from './authentication/tokenRouter.js'
import { authenticationRouter } from './authentication/authenticationRouter.js'
import { registerRouter } from './user/registerRouter.js'
import { userRouter } from './user/router.js'

const router = Express.Router()

router.use('/users/register', registerRouter)
router.use('/tokens', tokenRouter)
router.use(authenticationRouter)
router.use('/users', userRouter)

export { router as apiRouter }
