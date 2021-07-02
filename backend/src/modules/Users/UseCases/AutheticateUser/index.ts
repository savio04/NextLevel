import UserRepository from "../../Repositories/implemantations/UserRepository";
import AutheticateUserController from "./AutheticateUserController";
import AuthenticateUserUseCase from "./AutheticateUserUseCase";

export default () => {
    const userRepository = new UserRepository
    const autheticateUserUseCase = new AuthenticateUserUseCase(userRepository)
    const autheticateUserController = new AutheticateUserController(autheticateUserUseCase)

    return autheticateUserController
}