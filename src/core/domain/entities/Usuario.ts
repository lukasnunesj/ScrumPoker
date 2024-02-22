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
    if (nome) {
      this.nome = nome.trim();
    }
    this.validation();
  }

  private setId(id: string = v4()) {
    this.id = id;
  }

  getNome() {
    return this.nome;
  }

  getId() {
    return this.id;
  }

  convertFromEntity(id: string) {
    this.setId(id);
    return this;
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
