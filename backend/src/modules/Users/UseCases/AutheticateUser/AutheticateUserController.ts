import { Request, Response } from "express";
import AuthenticateUserUseCase from "./AutheticateUserUseCase";

class AutheticateUserController{
    constructor(private authenticateUserUseCase:AuthenticateUserUseCase){}

    async handle(request:Request,response:Response){
        const { email,password } = request.body

        const data = await this.authenticateUserUseCase.execute({
            email,
            password
        })

        return response.status(200).json(data)
    }
}

export default AutheticateUserController