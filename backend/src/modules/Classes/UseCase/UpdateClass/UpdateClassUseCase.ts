import AppError from "../../../../errors/AppErro";
import IClassRepository, { IClassDTO } from "../../Repositories/IClassRepository";

class UpdateClassUseCase{
    constructor(private classRepository:IClassRepository){}

    async execute({id, name,class_date,mod_id}:IClassDTO){
        const classeExisting = this.classRepository.findById(id as string)

        if(!classeExisting){
            throw new AppError('class not existing')
        }

        await this.classRepository.create({
            id,
            name,
            mod_id,
            class_date
        })
    }
}

export default UpdateClassUseCase