import { Card } from "../../../domain/value_objects/Card";

export class BaralhoDTO {
  constructor(public readonly id: string, public cards: Card[]) {}
}
