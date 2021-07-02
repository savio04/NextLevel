import { request, response, Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createClassController from '../modules/Classes/UseCase/CreateClass'
import listclassesController from '../modules/Classes/UseCase/ListClasses'
import updateClassController from '../modules/Classes/UseCase/UpdateClass'
const ClassRoute = Router()

ClassRoute.post('/', ensureAdmin , (request,response) => {
    createClassController().handle(request,response)
})

ClassRoute.get('/', (request,response) => {
    listclassesController().handle(request,response)
})

ClassRoute.put('/:id',ensureAdmin ,(request,response) => {
    updateClassController().handle(request,response)
})

export default ClassRoute