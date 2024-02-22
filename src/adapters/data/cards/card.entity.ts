import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Baralho } from "../baralhos/baralho.entity";

@Entity()
export class Card {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  value: string;

  @ManyToOne((type) => Baralho, (baralho) => baralho.cards, { eager: true })
  baralho: Baralho;
}
