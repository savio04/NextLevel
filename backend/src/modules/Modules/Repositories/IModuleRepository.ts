import Module from "../entities/Module";

export interface IModuleDTO{
    id?:string
    name: string
    numberOfClass?: number
}
interface IModuleRepository{
    create({name}:IModuleDTO):Promise<void>
    delete(id:string):Promise<void>
    findAll():Promise<Module[]>
    countClassModule(id:string):Promise<number>
    findById(id:string):Promise<Module>
    findByName(name:string):Promise<Module | undefined>
}

export default IModuleRepository