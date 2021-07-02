import Class from "../entities/Class";

export interface IClassDTO{
    id?:string
    name: string
    mod_id:string
    class_date:Date
}

interface IClassRepository{
    create(data:IClassDTO):Promise<void>
    findAll():Promise<Class[]>
    findById(id:string):Promise<Class>
}

export default IClassRepository