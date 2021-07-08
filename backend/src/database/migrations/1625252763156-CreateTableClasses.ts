import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableModules1625252768430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'class_date',
                        type: 'varchar'
                    },
                    {
                        name: 'module',
                        type: 'varchar'
                    },
                    {
                        name: 'mod_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name: 'module_classe_fk',
                        referencedTableName: 'modules',
                        referencedColumnNames: ['id'],
                        columnNames: ['mod_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes')
    }

}
