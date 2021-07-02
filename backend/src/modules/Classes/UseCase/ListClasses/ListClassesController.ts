import { Request, Response } from "express"
import ListClassesUseCase from "./ListClassesUseCase"

class ListClassesController{
    constructor(private listClassesUseCase:ListClassesUseCase){}

    async handle(request:Request,response:Response){
        const classes = await this.listClassesUseCase.execute()
        return response.json(classes)
    }
}

export default ListClassesController