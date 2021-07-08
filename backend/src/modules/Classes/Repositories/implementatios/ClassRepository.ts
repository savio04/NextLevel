import { getRepository, Repository } from "typeorm";
import Class from "../../entities/Class";
import IClassRepository, { IClassDTO } from "../IClassRepository";

class ClassRepository implements IClassRepository{
    private classesRepository: Repository<Class> 

    constructor(){
        this.classesRepository = getRepository(Class)
    }
    async create({ id,name, module, mod_id, class_date}:IClassDTO){
        const classes = this.classesRepository.create({
            id,
            name,
            module,
            mod_id,
            class_date
        })

        await this.classesRepository.save(classes)
    }

    async findAll(){
        const classes = await this.classesRepository
        .createQueryBuilder('class')
        .orderBy('name')
        .getMany()
        return classes
    }

    async findById(id:string){
        const classe = await this.classesRepository.findOne({id})

        return classe as Class
    }

    async delete(id:string){
        await this.classesRepository.delete(id)
    }
}

export default ClassRepository