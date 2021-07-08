import AppError from "../../../../errors/AppErro";
import IModuleRepository from "../../../Modules/Repositories/IModuleRepository";
import IClassRepository, { IClassDTO } from "../../Repositories/IClassRepository";

class UpdateClassUseCase{
    constructor(
        private classRepository:IClassRepository,
        private moduleRepository:IModuleRepository
    ){}

    async execute({id, name,class_date,module}:IClassDTO){
        const classeExisting = await this.classRepository.findById(id as string)
        const moduleExisting = await this.moduleRepository.findByName(module)

        if(!classeExisting){
            throw new AppError('class not existing')
        }

        await this.classRepository.create({
            id,
            name,
            mod_id: moduleExisting?.id,
            class_date,
            module
        })
    }
}

export default UpdateClassUseCase