import { Request, Response } from "express";
import { UsuarioUC } from "../../../../core/application/Usuario/UsuarioUC";
import { UsuariosDbRepository } from "../../../../adapters/data/usuarios/usuariosDbRepository";
import { UsuarioRequest } from "../../../../core/application/Usuario/Requests/UsuarioRequest";
import { container } from "tsyringe";

export async function criarUsuario(req: Request, res: Response): Promise<Response> {
  const request = new UsuarioRequest();

  request.data = req.body;

  const usuarioUC = container.resolve(UsuarioUC);

  const response = await usuarioUC.createUsuario(request);
  return res.status(response.code).json(response);
}
