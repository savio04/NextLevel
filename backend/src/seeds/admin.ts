import { hash } from "bcrypt";
import createConnection from '../database'

async function seedAdmin(){
    const db = await createConnection('localhost')

    const password = await hash('12345', 10)
    await db.query('INSERT INTO users(name,email,password,isadmin) VALUES ($1,$2,$3,$4)', 
    [
        'admin',
        'admin@gmail.com',
        password,
        true
    ])

    await db.close()
}

seedAdmin().then(() => {
    console.log('admin created')
})