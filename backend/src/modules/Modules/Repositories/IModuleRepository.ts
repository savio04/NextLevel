import Module from "../entities/Module";

export interface IModuleDTO{
    name: string
    numberOfClass?: number
}
interface IModuleRepository{
    create({name}:IModuleDTO):Promise<void>
    findAll():Promise<Module[]>
    countClassModule(id:string):Promise<number>
}

export default IModuleRepository