import ModuleRepository from "../../Repositories/implementatios/ModuleRepository"
import UpdateModuleController from "./UpdateModuleController"
import UpdateModuleUseCase from "./UpdateModuleUseCase"


export default () => {
    const moduleRepository = new ModuleRepository
    const updateModuleUseCase = new UpdateModuleUseCase(moduleRepository)
    const updateModuleController = new UpdateModuleController(updateModuleUseCase)

    return updateModuleController
}