export class UsuarioDTO {
  nome: string;
  id: string;

  constructor(nome: string, id?: string) {
    this.nome = nome;
    this.id = id;
  }
}
