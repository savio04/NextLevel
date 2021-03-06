import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    isadmin:boolean

    @CreateDateColumn()
    created_at:Date
}

export default User