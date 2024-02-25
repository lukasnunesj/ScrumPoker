import { v4 } from "uuid";
import { Pontuacao } from "../value_objects/Pontuacao";

export class Tarefa {
  private id: string;
  private descricao: string;
  private pontuacao: Pontuacao;

  constructor(descricao: string, pontuacao: number) {
    this.setId();
    this.setDescricao(descricao);
    this.setPontuacao(pontuacao);
  }

  private setId(id: string = v4()) {
    this.id = id;
  }

  private setDescricao(descricao: string) {
    this.descricao = descricao;
  }

  private setPontuacao(pontuacao: number) {
    this.pontuacao = new Pontuacao(pontuacao);
  }

  getId() {
    return this.id;
  }

  getDescricao() {
    return this.descricao;
  }

  getPontuacao() {
    return this.pontuacao.value;
  }
}
