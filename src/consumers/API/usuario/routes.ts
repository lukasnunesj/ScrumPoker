import { Router } from "express";
import { criarUsuario } from "./controllers/usuariosController";

const usuarioRouter = Router();
usuarioRouter.post("/", criarUsuario);
usuarioRouter.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});
usuarioRouter.patch("/:id");
usuarioRouter.delete("/:id");
export default usuarioRouter;
