import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  get(id: string): Promise<any>;
  save(usuario: Usuario): Promise<void>;
}
