import { Response } from "../../Response";
import { UsuarioDTO } from "../DTO/UsuarioDTO";

export class UsuarioResponse extends Response {
  data: UsuarioDTO;

  constructor(arg: any) {
    super();
    this.data = arg.data;
    this.success = arg.success;
    this.message = arg.message;
    this.code = arg.code;
  }
}
