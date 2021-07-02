import { Router } from 'express'
import autheticateUserController from '../modules/Users/UseCases/AutheticateUser'
const AuthRoute = Router()

AuthRoute.post('/', async (request,response) => {
    await autheticateUserController().handle(request,response)
})
export default AuthRoute