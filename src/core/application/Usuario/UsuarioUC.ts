import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/repositories/IUsuarioRepository";
import { UsuarioRequest } from "./Requests/UsuarioRequest";
import { UsuarioResponse } from "./Response/UsuarioResponse";

export class UsuarioUC {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async createUsuario(request: UsuarioRequest): Promise<UsuarioResponse> {
    const { data } = request;
    const usuario = new Usuario(data.nome);

    await usuario.create(this.usuarioRepository);

    return new UsuarioResponse({
      data: usuario,
      success: true,
      message: "Usuário criado com sucesso!",
      code: 201,
    });
  }
}
