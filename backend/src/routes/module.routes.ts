import { Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createModuleController from '../modules/Modules/UseCase/CreateModule'
import listModulesController from '../modules/Modules/UseCase/ListModules'
const ModuleRoute = Router()

ModuleRoute.post('/',ensureAdmin, (request,response) => {
    createModuleController().handle(request,response)
})

ModuleRoute.get('/', (request,response) => {
    listModulesController().handle(request,response)
})
export default ModuleRoute