import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('modules')
class Module{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date
}

export default Module