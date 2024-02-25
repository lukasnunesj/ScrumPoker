import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { NomeInvalidoError } from "../errors/NomeInvalidoError";
import { v4 as uuidv4 } from "uuid";
import { IdInvalidoError } from "../errors/IdInvalidoError";

export class Usuario {
  private id: string;
  private nome: string;

  constructor(nome: string) {
    this.id = uuidv4();
    this.nome = nome?.trim();
    this.validation();
  }

  getNome(): string {
    return this.nome;
  }

  getId(): string {
    return this.id;
  }

  convertFromEntity(id: string): this {
    if (!id || id.length === 0) {
      throw new IdInvalidoError();
    }
    this.id = id;
    return this;
  }

  private validation() {
    if (!this.getNome()) {
      throw new NomeInvalidoError();
    }
  }

  async create(usuarioRepository: IUsuarioRepository): Promise<void> {
    this.validation();
    await usuarioRepository.save(this);
  }
}
