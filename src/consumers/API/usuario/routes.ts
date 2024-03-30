/* istanbul ignore file */
import { Router } from "express";
import { UsuariosController } from "./controllers/usuariosController";
import { container } from "tsyringe";
import "../../../dependencies_container";

const usuarioRouter = Router();
const usuariosController = container.resolve(UsuariosController);

usuarioRouter.post("/", (req, res) => {
  usuariosController.criarUsuario(req, res);
});
usuarioRouter.get("/", (req, res) => {
  return res.json({
    data: {
      id: '1234',
      nome: 'Pedro'
    },
    sucess:true,
  });
});
usuarioRouter.patch("/:id");
usuarioRouter.delete("/:id");
export default usuarioRouter;
