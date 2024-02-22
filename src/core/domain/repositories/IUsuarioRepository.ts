import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  get(id: string): Promise<Usuario>;
  save(usuario: Usuario): Promise<Usuario>;
}
