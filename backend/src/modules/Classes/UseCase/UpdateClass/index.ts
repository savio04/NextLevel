import ModuleRepository from "../../../Modules/Repositories/implementatios/ModuleRepository"
import ClassRepository from "../../Repositories/implementatios/ClassRepository"
import UpdateClassController from "./UpdateClassController"
import UpdateClassUseCase from "./UpdateClassUseCase"

export default () => {
    const moduleRepository = new ModuleRepository
    const classRepository = new ClassRepository
    const updateClassUseCase = new UpdateClassUseCase(classRepository,moduleRepository)
    const updateClassController = new UpdateClassController(updateClassUseCase)

    return updateClassController
}