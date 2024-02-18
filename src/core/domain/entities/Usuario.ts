import { v4 } from "uuid";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { NomeInvalidoError } from "../errors/NomeInvalidoError";

export class Usuario {
  private id: string;
  private nome: string;

  constructor(nome: string) {
    this.setId();
    this.setNome(nome);
  }

  private setNome(nome: string) {
    this.nome = nome;
  }

  private setId() {
    this.id = v4();
  }
  getNome() {
    return this.nome;
  }

  getId() {
    return this.id;
  }

  private validation() {
    if (!this.getNome()) {
      throw new NomeInvalidoError("Nome inválido");
    }
  }

  async create(usuarioRepository: IUsuarioRepository) {
    this.validation();
    await usuarioRepository.save(this);
  }
}
