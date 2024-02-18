import { container } from "tsyringe";
import { IUsuarioRepository } from "./core/domain/repositories/IUsuarioRepository";
import { UsuariosDbRepository } from "./adapters/data/usuarios/usuariosDbRepository";

container.registerSingleton<IUsuarioRepository>("IUsuarioRepository", UsuariosDbRepository);
