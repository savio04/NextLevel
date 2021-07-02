export interface IClassDTO{
    name: string
    mod_id:string
    class_date:Date
}

interface IClassRepository{
    create(data:IClassDTO):Promise<void>
}

export default IClassRepository