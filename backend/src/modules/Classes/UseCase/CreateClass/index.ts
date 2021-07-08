import ModuleRepository from "../../../Modules/Repositories/implementatios/ModuleRepository";
import ClassRepository from "../../Repositories/implementatios/ClassRepository";
import CreateClassController from "./CreateClasseController";
import CreateClasseUseCase from "./CreateClasseUseCase";

export default () => {
    const classRepository = new ClassRepository
    const moduleRepository = new ModuleRepository
    const createClassUseCase = new CreateClasseUseCase(classRepository,moduleRepository)
    const createClassController = new CreateClassController(createClassUseCase)

    return createClassController
}