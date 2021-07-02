import AppError from "../../../../errors/AppErro";
import IClassRepository, { IClassDTO } from "../../Repositories/IClassRepository";

class DeleteClassUseCase{
    constructor(private classRepository:IClassRepository){}

    async execute(id:string){
        const classeExisting = this.classRepository.findById(id)

        if(!classeExisting){
            throw new AppError('class not existing')
        }

        await this.classRepository.delete(id)
    }
}

export default DeleteClassUseCase