import IClassRepository from "../../Repositories/IClassRepository";

class ListClassesUseCase{
    constructor(private classesRepository:IClassRepository){}

    async execute(){
        const modules = await this.classesRepository.findAll()
        return modules
    }
}

export default ListClassesUseCase