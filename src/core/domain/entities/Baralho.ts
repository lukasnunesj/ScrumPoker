import { v4 } from "uuid";
import { Card } from "../value_objects/Card";

export class Baralho {
  private id: string;

  private cards: Card[];
  constructor(cards: Card[]) {
    this.setId();
    this.setCards(cards);
  }

  private setId() {
    this.id = v4();
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
}
