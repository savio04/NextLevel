import ClassRepository from "../../Repositories/implementatios/ClassRepository"
import UpdateClassController from "./UpdateClassController"
import UpdateClassUseCase from "./UpdateClassUseCase"

export default () => {
    const classRepository = new ClassRepository
    const createClassUseCase = new UpdateClassUseCase(classRepository)
    const updateClassController = new UpdateClassController(createClassUseCase)

    return updateClassController
}