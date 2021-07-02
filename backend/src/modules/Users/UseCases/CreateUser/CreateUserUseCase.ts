import IUsersRepository, { IUserDTO } from "../../Repositories/IUserRepository"; 
import { hash } from 'bcrypt'
import AppError from "../../../../errors/AppErro";

class CreateUserUseCase{
    constructor(private userRepository:IUsersRepository){}

    async execute({name,email,password}:IUserDTO){
        const user = await this.userRepository.findByEmail(email)
        const passwordcrypto = await hash(password,10)
        
        if(user){
            throw new AppError('user already existing')
        }

        await this.userRepository.create({
            name,
            email,
            password:passwordcrypto
        })
    }
}

export default CreateUserUseCase