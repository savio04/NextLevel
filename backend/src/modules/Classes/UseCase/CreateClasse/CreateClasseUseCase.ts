import IClassRepository, { IClassDTO } from "../../Repositories/IClassRepository";

class CreateClasseUseCase{
    constructor(private classRepository:IClassRepository){}

    async execute({ name, class_date, mod_id}:IClassDTO){

        const dateString = new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})
        const date = new Date(dateString)
        await this.classRepository.create({
            name,
            class_date,
            mod_id
        })
    }
}

export default CreateClasseUseCase