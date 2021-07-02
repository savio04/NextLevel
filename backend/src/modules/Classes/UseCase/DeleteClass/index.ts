import ClassRepository from "../../Repositories/implementatios/ClassRepository"
import DeleteClassController from "./DeleteClassController"
import DeleteClassUseCase from "./DeleteClassUseCase"

export default () => {
    const classRepository = new ClassRepository
    const deleteClassUseCase = new DeleteClassUseCase(classRepository)
    const deleteClassController = new DeleteClassController(deleteClassUseCase)

    return deleteClassController
}