import ClassRepository from "../../Repositories/implementatios/ClassRepository";
import CreateClassController from "./CreateClasseController";
import CreateClasseUseCase from "./CreateClasseUseCase";

export default () => {
    const classRepository = new ClassRepository
    const createClassUseCase = new CreateClasseUseCase(classRepository)
    const createClassController = new CreateClassController(createClassUseCase)

    return createClassController
}