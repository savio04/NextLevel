import { response } from "express";
import IClassRepository from "../../../Classes/Repositories/IClassRepository";
import IModuleRepository, { IModuleDTO } from "../../Repositories/IModuleRepository";

class ListModulesUseCase{
    constructor(
        private moduleRepository:IModuleRepository
    ){}

    async execute(){
        const modules = await this.moduleRepository.findAll()
        const newModules = Promise.all(
            modules.map(async (module) => {
            const numberOfClass = await this.moduleRepository.countClassModule(module.id)
            return {numberOfClass,...module}
        }))

        return newModules
    }
}

export default ListModulesUseCase