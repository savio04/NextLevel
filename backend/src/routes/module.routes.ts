import { Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createModuleController from '../modules/Modules/UseCase/CreateModule'
const ModuleRoute = Router()

ModuleRoute.post('/',ensureAdmin, (request,response) => {
    createModuleController().handle(request,response)
})
export default ModuleRoute