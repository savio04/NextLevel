import ModuleRepository from "../../Repositories/implementatios/ModuleRepository";
import CreateModuleController from "./CreateModuleController";
import CreateModuleUseCase from "./CreateModuleUseCase";

export default () => {
    const moduleRepository = new ModuleRepository
    const createModuleUseCase = new CreateModuleUseCase(moduleRepository)
    const createModuleController = new CreateModuleController(createModuleUseCase)
    
    return createModuleController
}