import ClassRepository from "../../Repositories/implementatios/ClassRepository"
import ListClassesController from "./ListClassesController"
import ListClassesUseCase from "./ListClassesUseCase"

export default () => {

    const classRepository = new ClassRepository
    const listClassUseCase = new ListClassesUseCase(classRepository)
    const listclassesController = new ListClassesController(listClassUseCase)
    
    return listclassesController
}