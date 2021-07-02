import { Router } from 'express'
import AccountRoute from './account.routes'
import ModuleRoute from './module.routes'
import ClassRoute from './class.routes'
import AuthRoute from './autheticate.routes'
const Routes =Router()

Routes.use('/account', AccountRoute)
Routes.use('/module', ModuleRoute)
Routes.use('/class', ClassRoute)
Routes.use('/session', AuthRoute)

export default Routes