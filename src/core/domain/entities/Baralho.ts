import { v4 } from "uuid";
import { Card } from "../value_objects/Card";
import { IBaralhoRepository } from "../repositories/IBaralhoRepository";

export class Baralho {
  private id: string;

  private cards: Card[];
  constructor(cards?: Card[]) {
    this.setId();
    this.setCards(cards);
  }

  private setId(id: string = v4()) {
    this.id = id;
  }

  private setCards(cards: Card[]) {
    this.cards = cards;
  }

  getId() {
    return this.id;
  }

  getCards() {
    return this.cards;
  }

  convertFromEntity(baralho: any) {
    this.setId(baralho.id);
    this.setCards(baralho.cards);
    return this;
  }

  create(baralhoRepository: IBaralhoRepository) {
    return baralhoRepository.save(this);
  }
}
