import { Request, Response } from "express";
import { BaralhoRequest } from "../../../../core/application/Baralho/Requests/BaralhoRequest";
import { inject, injectable } from "tsyringe";
import { IBaralhoUC } from "../../../../core/application/Baralho/Ports/IBaralhoUC";
import { Card } from "../../../../core/domain/value_objects/Card";

@injectable()
export class BaralhosController {
  constructor(
    @inject("IBaralhoUC")
    private baralhoUC: IBaralhoUC
  ) {}

  async criarBaralho(req: Request, res: Response): Promise<Response> {
    const request = new BaralhoRequest();

    request.data = req.body.data;

    const response = await this.baralhoUC.createBaralho(request);

    return res.status(response.code).json(response);
  }
}
