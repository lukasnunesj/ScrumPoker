import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Card } from "../cards/card.entity";

@Entity()
export class Baralho {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToMany(() => Card, (card) => card.baralho, { cascade: true })
  public cards: Card[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
