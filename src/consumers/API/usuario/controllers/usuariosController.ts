import { Request, Response } from "express";
import { UsuarioUC } from "../../../../core/application/Usuario/UsuarioUC";
import { UsuarioRequest } from "../../../../core/application/Usuario/Requests/UsuarioRequest";
import { container, inject, injectable } from "tsyringe";
import { IUsuarioUC } from "../../../../core/application/Usuario/Ports/IUsuarioUC";

@injectable()
export class UsuariosController {
  constructor(@inject("IUsuarioUC") private usuarioUC: IUsuarioUC) {}

  async criarUsuario(req: Request, res: Response): Promise<Response> {
    console.log(this);

    const request = new UsuarioRequest();

    request.data = req.body;
    console.log(this.usuarioUC);

    const response = await this.usuarioUC.createUsuario(request);
    return res.status(response.code).json(response);
  }
}
