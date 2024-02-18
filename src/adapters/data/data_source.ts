import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "sqlite",
  database: "./db/test.sqlite",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  logging: true,
  migrations: ["./dist/adapters/data/migrations/**/*{.js,.ts}"],
  synchronize: true, // don't use TRUE in production!
  migrationsRun: true,
});
