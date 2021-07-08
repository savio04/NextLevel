import { Request, Response } from "express";
import UpdateClassUseCase from "./UpdateClassUseCase";

class UpdateClassController{
    constructor(private updateClassUseCase:UpdateClassUseCase){}

    async handle(request:Request,response:Response){
        const { name, class_date, module } = request.body
        const {id} = request.params

        await this.updateClassUseCase.execute({
            id,
            name,
            class_date,
            module
        })

        return response.status(200).send()
    }
}
export default UpdateClassController