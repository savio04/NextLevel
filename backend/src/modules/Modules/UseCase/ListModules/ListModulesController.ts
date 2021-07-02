import { Request, Response } from "express"
import ListModulesUseCase from "./ListModulesUseCase"

class ListModulesController{
    constructor(private listModuleUseCase:ListModulesUseCase){}

    async handle(request:Request,response:Response){
        const modules = await this.listModuleUseCase.execute()
        return response.json(modules)
    }
}

export default ListModulesController