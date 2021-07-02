import User from "../entities/User";

export interface IUserDTO{
    name:string
    email:string
    password:string
}

interface IUsersRepository{
    create(data:IUserDTO):Promise<void>
    findByEmail(email:string):Promise<User>
    findById(id:string):Promise<User>
}

export default IUsersRepository