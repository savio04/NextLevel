import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Module from "../../Modules/entities/Module"

@Entity('classes')
class Class{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToOne(() => Module)
    @JoinColumn({name: 'mod_id'})
    Module: Module

    @Column()
    mod_id:string
    
    @Column()
    class_date:Date

    @CreateDateColumn()
    created_at: Date
}

export default Class