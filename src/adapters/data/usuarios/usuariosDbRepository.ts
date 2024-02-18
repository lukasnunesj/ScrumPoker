import { Usuario } from "../../../core/domain/entities/Usuario";
import { IUsuarioRepository } from "../../../core/domain/repositories/IUsuarioRepository";
import { myDataSource } from "../data_source";
import { Usuario as UsuarioEntity } from "./usuario.entity";

export class UsuariosDbRepository implements IUsuarioRepository {
  private repoisitory: any;

  constructor() {
    this.repoisitory = myDataSource.getRepository(UsuarioEntity);
  }

  async get(id: string): Promise<any> {
    return await this.repoisitory.findOneBy({ id });
  }

  save(usuario: Usuario): Promise<void> {
    var user = this.repoisitory.create(usuario);
    return this.repoisitory.save(user);
  }
}
