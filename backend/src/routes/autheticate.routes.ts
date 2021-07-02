import { Router } from 'express'
import autheticateUserController from '../modules/Users/UseCases/AutheticateUser'
const AuthRoute = Router()

AuthRoute.post('/', (request,response) => {
    autheticateUserController().handle(request,response)
})
export default AuthRoute