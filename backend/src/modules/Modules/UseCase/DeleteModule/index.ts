import ModuleRepository from "../../Repositories/implementatios/ModuleRepository"
import DeleteModuleController from "./DeleteModuleController"
import DeleteModuleUseCase from "./DeleteModuleUseCase"


export default () => {
    const classRepository = new ModuleRepository
    const deleteModuleUseCase = new DeleteModuleUseCase(classRepository)
    const deleteModuleController = new DeleteModuleController(deleteModuleUseCase)

    return deleteModuleController
}