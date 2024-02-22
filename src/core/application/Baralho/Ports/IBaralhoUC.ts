import { BaralhoRequest } from "../Requests/BaralhoRequest";
import { BaralhoResponse } from "../Responses/BaralhoResponse";

export interface IBaralhoUC {
  createBaralho(request: BaralhoRequest): Promise<BaralhoResponse>;
}
