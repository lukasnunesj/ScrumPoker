import { Repository } from "typeorm";
import { Usuario } from "../../../core/domain/entities/Usuario";
import { IUsuarioRepository } from "../../../core/domain/repositories/IUsuarioRepository";
import { myDataSource } from "../data_source";
import { Usuario as UsuarioEntity } from "./usuario.entity";

export class UsuariosDbRepository implements IUsuarioRepository {
  private repoisitory: Repository<UsuarioEntity>;

  constructor() {
    this.repoisitory = myDataSource.getRepository(UsuarioEntity);
  }

  async get(id: string): Promise<Usuario> {
    const user = await this.repoisitory.findOneBy({ id });
    return new Usuario(user.nome).convertFromEntity(user.id);
  }

  async save(usuario: Usuario): Promise<Usuario> {
    const user = this.repoisitory.create({ ...usuario });
    await this.repoisitory.save(user);
    return new Usuario(user.nome).convertFromEntity(user.id);
  }
}
