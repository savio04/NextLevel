import { request, response, Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createClassController from '../modules/Classes/UseCase/CreateClasse'
import listclassesController from '../modules/Classes/UseCase/ListClasses'
const ClassRoute = Router()

ClassRoute.post('/', ensureAdmin , (request,response) => {
    createClassController().handle(request,response)
})

ClassRoute.get('/', (request,response) => {
    listclassesController().handle(request,response)
})

export default ClassRoute