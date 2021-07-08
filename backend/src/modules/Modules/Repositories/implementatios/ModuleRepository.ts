import { getRepository, Repository } from "typeorm";
import Module from "../../entities/Module";
import IModuleRepository, { IModuleDTO } from "../IModuleRepository";

class ModuleRepository implements IModuleRepository{
    private moduleRepository: Repository<Module>
    
    constructor(){
        this.moduleRepository = getRepository(Module)
    }
    async create({id,name}:IModuleDTO){
        const module = this.moduleRepository.create({
            id,
            name
        })

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
    async findById(id:string){
        const classe = await this.moduleRepository.findOne({id})

        return classe as Module
    }

    async delete(id:string){
        await this.moduleRepository.delete(id)
    }

    async findByName(name:string){
        const moduleSerch = await this.moduleRepository.findOne({name})
        
        return moduleSerch 
    }
}

export default ModuleRepository