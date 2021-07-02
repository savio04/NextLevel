import { Request, Response } from "express";
import CreateModuleUseCase from "./CreateModuleUseCase";

class CreateModuleController{
    constructor(private creteModuleUseCase:CreateModuleUseCase){}

    async handle(request:Request,response:Response){
        const { name } = request.body

        await this.creteModuleUseCase.execute(name)

        return response.status(201).send()
    }
}

export default CreateModuleController