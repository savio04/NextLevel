import AppError from "../../../../errors/AppErro";
import IModuleRepository from "../../Repositories/IModuleRepository";

class DeleteModuleUseCase{
    constructor(private moduleRepository:IModuleRepository){}

    async execute(id:string){
        const moduleExisting = this.moduleRepository.findById(id)

        if(!moduleExisting){
            throw new AppError('module not existing')
        }

        await this.moduleRepository.delete(id)
    }
}

export default DeleteModuleUseCase