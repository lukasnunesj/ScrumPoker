import { Baralho } from "../entities/Baralho";

export interface IBaralhoRepository {
  get(id: string): Promise<Baralho>;
  save(baralho: Baralho): Promise<Baralho>;
}
