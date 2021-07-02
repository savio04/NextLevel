import ModuleRepository from "../../Repositories/implementatios/ModuleRepository"
import ListModulesController from "./ListModulesController"
import ListModulesUseCase from "./ListModulesUseCase"

export default () => {

    const moduleRepository = new ModuleRepository
    const listModuleUseCase = new ListModulesUseCase(moduleRepository)
    const listModuleController = new ListModulesController(listModuleUseCase)
    
    return listModuleController
}