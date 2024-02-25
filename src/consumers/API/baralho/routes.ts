/* istanbul ignore file */
import { Router } from "express";
import { BaralhosController } from "./controllers/baralhosController";
import "../../../dependencies_container";
import { container } from "tsyringe";

const baralhoRouter = Router();
const baralhosController = container.resolve(BaralhosController);

baralhoRouter.post("/", (req, res) => {
  baralhosController.criarBaralho(req, res);
});
baralhoRouter.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});
baralhoRouter.patch("/:id");
baralhoRouter.delete("/:id");
export default baralhoRouter;
