import AppError from "../../../../errors/AppErro";
import IModuleRepository from "../../Repositories/IModuleRepository";

class UpdateModuleUseCase{
    constructor(private moduleRepository:IModuleRepository){}

    async execute(name:string,id:string){
        const classeExisting = this.moduleRepository.findById(id)

        if(!classeExisting){
            throw new AppError('class not existing')
        }

        await this.moduleRepository.create({
            id,
            name
        })
    }
}

export default UpdateModuleUseCase