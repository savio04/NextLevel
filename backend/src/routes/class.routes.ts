import { Router } from 'express'
import ensureAdmin from '../middlewares/AuthAdmin'
import createClassController from '../modules/Classes/UseCase/CreateClasse'
const ClassRoute = Router()

ClassRoute.post('/', ensureAdmin ,async (request,response) => {
    await createClassController().handle(request,response)
})

export default ClassRoute