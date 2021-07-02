import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import createConnection from  './database'
import Routes from './routes'
import AppError from './errors/AppErro'


createConnection()
const app = express()


app.use(express.json())
app.use('/next-level',Routes)

app.use((err:Error, request:Request,response:Response,next:NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.status).json({
            message: err.message
        })
    }

    return response.status(500).json({
        message: err.message
    })
})

app.listen(2323,() => {
    console.log('Api iniciada na porta 2323...')
})