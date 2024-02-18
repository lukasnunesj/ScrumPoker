import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsario1708268994788 implements MigrationInterface {
    name = 'CreateUsario1708268994788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
