import { getRepository, Repository } from "typeorm";
import db from "../../../../database";
import Module from "../../entities/Module";
import IModuleRepository, { IModuleDTO } from "../IModuleRepository";

class ModuleRepository implements IModuleRepository{
    private moduleRepository: Repository<Module>
    
    constructor(){
        this.moduleRepository = getRepository(Module)
    }
    async create({name}:IModuleDTO){
        const module = this.moduleRepository.create({name})

        await this.moduleRepository.save(module)
    }

    async findAll(){
        const modules= await this.moduleRepository
        .createQueryBuilder()
        .orderBy('name')
        .getMany()

        return modules
    }

    async countClassModule(id:string){
        const [{count}] = await this.moduleRepository
        .query(`
        SELECT COUNT(*) FROM classes c WHERE c.mod_id = $1
        `,
        [id])
        return count as number
    }
}

export default ModuleRepository