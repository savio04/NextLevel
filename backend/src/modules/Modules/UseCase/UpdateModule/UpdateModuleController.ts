import { Request, Response } from "express";
import UpdateModuleUseCase from "./UpdateModuleUseCase";

class UpdateModuleController{
    constructor(private updateModuleUseCase:UpdateModuleUseCase){}

    async handle(request:Request,response:Response){
        const { name } = request.body
        const {id} = request.params

        await this.updateModuleUseCase.execute(name, id)

        return response.status(204).send()
    }
}
export default UpdateModuleController