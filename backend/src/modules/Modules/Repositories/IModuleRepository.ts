import Module from "../entities/Module";

interface IModuleRepository{
    create(name:string):Promise<void>
    findAll():Promise<Module[]>
}

export default IModuleRepository