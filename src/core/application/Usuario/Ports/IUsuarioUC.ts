import { UsuarioRequest } from "../Requests/UsuarioRequest";
import { UsuarioResponse } from "../Response/UsuarioResponse";

export interface IUsuarioUC {
  createUsuario(request: UsuarioRequest): Promise<UsuarioResponse>;
}
