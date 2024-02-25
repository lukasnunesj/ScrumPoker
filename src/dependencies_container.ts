/* istanbul ignore file */
import { container } from "tsyringe";
import { UsuariosDbRepository } from "./adapters/data/usuarios/usuariosDbRepository";
import { UsuarioUC } from "./core/application/Usuario/UsuarioUC";
import { BaralhoUC } from "./core/application/Baralho/BaralhoUC";
import { BaralhosDbRepository } from "./adapters/data/baralhos/baralhosDbRepository";

container.registerSingleton("IUsuarioRepository", UsuariosDbRepository);
container.registerSingleton("IUsuarioUC", UsuarioUC);

container.registerSingleton("IBaralhoRepository", BaralhosDbRepository);
container.registerSingleton("IBaralhoUC", BaralhoUC);
