/* istanbul ignore file */
import express from "express";
import "reflect-metadata";
import { myDataSource } from "./adapters/data/data_source";
import usuarioRouter from "./consumers/API/usuario/routes";
import "./dependencies_container";
import baralhoRouter from "./consumers/API/baralho/routes";

const app = express();

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use(express.json());

app.use("/usuarios", usuarioRouter);
app.use("/baralhos", baralhoRouter);

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
