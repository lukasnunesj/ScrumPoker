import { inject, injectable } from "tsyringe";
import { IBaralhoUC } from "./Ports/IBaralhoUC";
import { IBaralhoRepository } from "../../domain/repositories/IBaralhoRepository";
import { BaralhoRequest } from "./Requests/BaralhoRequest";
import { BaralhoResponse } from "./Responses/BaralhoResponse";
import { Baralho } from "../../domain/entities/Baralho";
import { Card } from "../../domain/value_objects/Card";

@injectable()
export class BaralhoUC implements IBaralhoUC {
  constructor(
    @inject("IBaralhoRepository")
    private baralhoRepository: IBaralhoRepository
  ) {}

  async createBaralho(request: BaralhoRequest): Promise<BaralhoResponse> {
    const { data } = request;
    const cards = data.cards.map((value) => {
      return new Card(value);
    });

    const baralho = new Baralho(cards);

    await baralho.create(this.baralhoRepository);

    return new BaralhoResponse({
      data: baralho,
      success: true,
      message: "Baralho criado com sucesso!",
      code: 201,
    });
  }
}
