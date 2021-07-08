import { request, response, Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createClassController from '../modules/Classes/UseCase/CreateClass'
import listclassesController from '../modules/Classes/UseCase/ListClasses'
import updateClassController from '../modules/Classes/UseCase/UpdateClass'
import deleteClassController from '../modules/Classes/UseCase/DeleteClass'
const ClassRoute = Router()

ClassRoute.post('/', ensureAdmin , async (request,response) => {
    await createClassController().handle(request,response)
})

ClassRoute.get('/', async (request,response) => {
    await listclassesController().handle(request,response)
})

ClassRoute.put('/:id',ensureAdmin ,async (request,response) => {
    await updateClassController().handle(request,response)
})

ClassRoute.delete('/:id',ensureAdmin,async (request,response) => {
    await deleteClassController().handle(request,response)
})

export default ClassRoute