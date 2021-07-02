import { Router } from 'express'
import createUserController from '../modules/Users/UseCases/CreateUser'
const AccountRoute = Router()

AccountRoute.post('/',(request,response) => {
    createUserController().handle(request,response)
})

export default AccountRoute