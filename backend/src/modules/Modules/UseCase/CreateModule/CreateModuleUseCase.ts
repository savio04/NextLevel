import IModuleRepository from "../../Repositories/IModuleRepository";

interface IRequest{
    id?:string
    name:string
}
class CreateModuleUseCase{
    constructor(private moduleRepository:IModuleRepository){}

    async execute(name:string){
        await this.moduleRepository.create({name})
    }
}

export default CreateModuleUseCase