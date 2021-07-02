import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'
import AppError from "../../../../errors/AppErro";
import IUsersRepository from "../../Repositories/IUserRepository";

interface IRequest{
    email:string
    password:string
}

class AuthenticateUserUseCase{
    constructor(private userRepository:IUsersRepository){}

    async execute({email,password}:IRequest){
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            throw new AppError('email/password incorrect')
        }

        const passwordCompare = await compare(password, user.password)

        if(!passwordCompare){
            throw new AppError('email/password incorrect')
        }

        const token = jwt.sign({}, '3140aad4-ca49-4657-8de2-703d982d8129', {
            subject: user.id,
            expiresIn: '1d'
        })

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token
        }
    }
}

export default AuthenticateUserUseCase