import { getRepository, Repository } from "typeorm";
import db from "../../../../database";
import Module from "../../entities/Module";
import IModuleRepository from "../IModuleRepository";

class ModuleRepository implements IModuleRepository{
    private moduleRepository: Repository<Module>
    
    constructor(){
        this.moduleRepository = getRepository(Module)
    }
    async create(name:string){
        const module = this.moduleRepository.create({name})

        await this.moduleRepository.save(module)
    }

    async findAll(){
        const modules = await this.moduleRepository.find()

        return modules
    }
}

export default ModuleRepository