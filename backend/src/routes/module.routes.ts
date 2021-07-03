import { Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createModuleController from '../modules/Modules/UseCase/CreateModule'
import listModulesController from '../modules/Modules/UseCase/ListModules'
import updateModuleController from '../modules/Modules/UseCase/UpdateModule'
import deleteModuleController from '../modules/Modules/UseCase/DeleteModule'
const ModuleRoute = Router()

ModuleRoute.post('/',ensureAdmin, (request,response) => {
    createModuleController().handle(request,response)
})

ModuleRoute.get('/', (request,response) => {
    listModulesController().handle(request,response)
})

ModuleRoute.put('/:id',(request,response) => {
    updateModuleController().handle(request,response)
})

ModuleRoute.delete('/:id',(request,response) => {
    deleteModuleController().handle(request,response)
})
export default ModuleRoute