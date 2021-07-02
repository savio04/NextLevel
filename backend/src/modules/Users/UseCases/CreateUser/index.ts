import UserRepository from "../../Repositories/implemantations/UserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";


export default () => {
    const userRepository = new UserRepository
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const createUserController = new CreateUserController(createUserUseCase)

    return createUserController
}
