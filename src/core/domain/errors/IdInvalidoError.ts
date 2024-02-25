export class IdInvalidoError extends Error {
  constructor() {
    super();
    this.message = "Id inválido";
    this.name = "IdInvalidoError";
  }
}
