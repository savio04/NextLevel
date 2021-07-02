import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErro";
import { verify } from 'jsonwebtoken'
import UserRepository from "../modules/Users/Repositories/implemantations/UserRepository";

async function ensureAdmin(
    request:Request,
    response:Response,
    next:NextFunction
    ){
        const {authorization} = request.headers
        if(!authorization){
            throw new AppError('token is missing')
        }
        const [,token] = authorization.split(' ')
        try{
            const {sub}  = verify(token, '3140aad4-ca49-4657-8de2-703d982d8129')
            request.user = {
                id: sub as string
            }
            const userRepository = new UserRepository
            const user = await userRepository.findById(sub as string)
            if(!user.isadmin){
                throw new AppError('user is not admin')
            }
            next()
        }catch(err){
            throw new AppError(`${err.message}`)
        }
    }

export default ensureAdmin