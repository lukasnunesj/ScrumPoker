export class NomeInvalidoError extends Error {
  constructor() {
    super();
    this.message = "Nome inválido";
    this.name = "NomeInvalidoError";
  }
}
