export class NomeInvalidoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NomeInvalidoError";
  }
}
