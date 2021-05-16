import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnits1619982243078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
<<<<<<< Updated upstream
                name: "course_units",
=======
                name: "courseunits",
>>>>>>> Stashed changes
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
<<<<<<< Updated upstream
                        name:"created_at",
=======
                        name:"activy_date",
>>>>>>> Stashed changes
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courseunits");
    }

}
<<<<<<< Updated upstream
//
=======
>>>>>>> Stashed changes
