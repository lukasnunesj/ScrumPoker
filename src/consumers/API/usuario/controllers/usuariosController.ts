import { Request, Response } from "express";
import { UsuarioRequest } from "../../../../core/application/Usuario/Requests/UsuarioRequest";
import { inject, injectable } from "tsyringe";
import { IUsuarioUC } from "../../../../core/application/Usuario/Ports/IUsuarioUC";

@injectable()
export class UsuariosController {
  constructor(
    @inject("IUsuarioUC")
    private usuarioUC: IUsuarioUC
  ) {}

  async criarUsuario(req: Request, res: Response): Promise<Response> {
    const request = new UsuarioRequest();

    request.data = req.body;

    const response = await this.usuarioUC.createUsuario(request);
    return res.status(response.code).json(response);
  }
}
