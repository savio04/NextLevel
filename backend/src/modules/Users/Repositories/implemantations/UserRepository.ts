import IUsersRepository, { IUserDTO } from "../IUserRepository";
import User from "../../entities/User";
import { getRepository, Repository } from "typeorm";

class UserRepository implements IUsersRepository{

    private userRepository: Repository<User>

    constructor(){
        this.userRepository = getRepository(User)
    }
    
    async create({name,email,password}:IUserDTO){
        const user = this.userRepository.create({
            name,
            email,
            password
        })

        await this.userRepository.save(user)
    }

    async findByEmail(email:string){
        const user = await this.userRepository.findOne({email}) as User
        return user
    }

    async findById(id:string){
        const user = await this.userRepository.findOne({id}) as User

        return user
    }
}


export default UserRepository