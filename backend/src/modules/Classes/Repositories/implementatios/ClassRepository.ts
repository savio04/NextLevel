import { getRepository, Repository } from "typeorm";
import db from "../../../../database";
import Class from "../../entities/Class";
import IClassRepository, { IClassDTO } from "../IClassRepository";

class ClassRepository implements IClassRepository{
    private classesRepository: Repository<Class> 

    constructor(){
        this.classesRepository = getRepository(Class)
    }
    async create({ name, mod_id, class_date}:IClassDTO){
        const classes = this.classesRepository.create({
            name,
            mod_id,
            class_date
        })

        await this.classesRepository.save(classes)
    }

    async findAll(){
        const classes = await this.classesRepository
        .createQueryBuilder('class')
        .leftJoinAndSelect('class.Module', 'modules')
        .getMany()
        return classes
    }
}

export default ClassRepository