import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBaralhoAndCart1708482939089 implements MigrationInterface {
    name = 'CreateBaralhoAndCart1708482939089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "baralho" ("id" varchar PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "card" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" varchar NOT NULL, "baralhoId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_usuario" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_usuario"("id", "nome") SELECT "id", "nome" FROM "usuario"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`ALTER TABLE "temporary_usuario" RENAME TO "usuario"`);
        await queryRunner.query(`CREATE TABLE "temporary_card" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" varchar NOT NULL, "baralhoId" varchar, CONSTRAINT "FK_3495aaca43d1e9d951fe8a2baed" FOREIGN KEY ("baralhoId") REFERENCES "baralho" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_card"("id", "value", "baralhoId") SELECT "id", "value", "baralhoId" FROM "card"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`ALTER TABLE "temporary_card" RENAME TO "card"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" RENAME TO "temporary_card"`);
        await queryRunner.query(`CREATE TABLE "card" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" varchar NOT NULL, "baralhoId" varchar)`);
        await queryRunner.query(`INSERT INTO "card"("id", "value", "baralhoId") SELECT "id", "value", "baralhoId" FROM "temporary_card"`);
        await queryRunner.query(`DROP TABLE "temporary_card"`);
        await queryRunner.query(`ALTER TABLE "usuario" RENAME TO "temporary_usuario"`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "usuario"("id", "nome") SELECT "id", "nome" FROM "temporary_usuario"`);
        await queryRunner.query(`DROP TABLE "temporary_usuario"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TABLE "baralho"`);
    }

}
