import AppError from "../../../../errors/AppErro";
import IModuleRepository from "../../../Modules/Repositories/IModuleRepository";
import IClassRepository, { IClassDTO } from "../../Repositories/IClassRepository";

class CreateClasseUseCase{
    constructor(
        private classRepository:IClassRepository,
        private moduleRepository:IModuleRepository
        ){}

    async execute({ name, class_date, module}:IClassDTO){
        const moduleSeach = await this.moduleRepository.findByName(module)
        if(!moduleSeach){
            throw new AppError('Module not existing')
        }
        await this.classRepository.create({
            name,
            class_date,
            mod_id: moduleSeach.id,
            module
        })
    }
}

export default CreateClasseUseCase