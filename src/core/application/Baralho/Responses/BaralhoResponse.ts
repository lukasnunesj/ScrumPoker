import { Response } from "../../Response";
import { BaralhoDTO } from "../DTO/BaralhoDTO";

export class BaralhoResponse extends Response {
  data: BaralhoDTO;

  constructor(arg: any) {
    super();
    this.data = arg.data;
    this.success = arg.success;
    this.message = arg.message;
    this.code = arg.code;
  }
}
