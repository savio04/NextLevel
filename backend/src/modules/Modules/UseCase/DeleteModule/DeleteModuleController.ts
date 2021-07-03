import { Request, Response } from "express";
import DeleteModuleUseCase from "./DeleteModuleUseCase";

class DeleteModuleController{
    constructor(private deleteModuleUseCase:DeleteModuleUseCase){}

    async handle(request:Request,response:Response){
        const {id} = request.params

        await this.deleteModuleUseCase.execute(id)

        return response.status(204).send()
    }
}
export default DeleteModuleController