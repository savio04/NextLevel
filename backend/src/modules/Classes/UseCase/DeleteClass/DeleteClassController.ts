import { Request, Response } from "express";
import DeleteClassUseCase from "./DeleteClassUseCase";

class DeleteClassController{
    constructor(private deleteClassUseCase:DeleteClassUseCase){}

    async handle(request:Request,response:Response){
        const {id} = request.params

        await this.deleteClassUseCase.execute(id)

        return response.status(204).send()
    }
}
export default DeleteClassController