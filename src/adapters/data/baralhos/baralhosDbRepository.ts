import { IBaralhoRepository } from "../../../core/domain/repositories/IBaralhoRepository";
import { myDataSource } from "../data_source";
import { Baralho as BaralhoEntity } from "./baralho.entity";
import { Baralho } from "../../../core/domain/entities/Baralho";
import { Repository } from "typeorm";

export class BaralhosDbRepository implements IBaralhoRepository {
  private repository: Repository<BaralhoEntity>;

  constructor() {
    this.repository = myDataSource.getRepository(BaralhoEntity);
  }
  async get(id: string): Promise<Baralho> {
    const baralho = await this.repository.findOneBy({ id });
    return new Baralho().convertFromEntity(baralho);
  }

  async save(baralho: Baralho): Promise<Baralho> {
    const BaralhoEntity = this.repository.create({ ...baralho });
    await this.repository.save(BaralhoEntity);
    return new Baralho().convertFromEntity(BaralhoEntity);
  }
}
