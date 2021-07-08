import { Request, Response } from "express";
import CreateClasseUseCase from "./CreateClasseUseCase";

class CreateClassController{
    constructor(private createClassUseCase:CreateClasseUseCase){}

    async handle(request:Request,response:Response){
        const { name, class_date, module } = request.body
        await this.createClassUseCase.execute({
            name,
            class_date,
            module
        })

        return response.status(201).send()
    }
}

export default CreateClassController