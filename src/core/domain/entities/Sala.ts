import { Baralho } from "./Baralho";
import { Tarefa } from "./Terefa";
import { Usuario } from "./Usuario";

export class Sala {
  private id: string;
  private baralho: Baralho;
  private usuarios: Usuario[];
  private tarefas: Tarefa[];

  constructor(baralho: Baralho, usuarios: Usuario[], tarefas: Tarefa[]) {
    this.setId();
    this.setBaralho(baralho);
    this.setUsuarios(usuarios);
    this.setTarefas(tarefas);
  }

  private setId() {
    this.id = this.generateId();
  }

  private generateId() {
    const CHARS = "0123456789";
    const CHARS_LENGTH = CHARS.length;

    const buffer = new Array(16);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = Math.floor(Math.random() * CHARS_LENGTH);
    }

    let result = "";
    for (let i = 0; i < buffer.length; i++) {
      result += CHARS[buffer[i]];
    }

    return `${result.substring(0, 3)}-${result.substring(3, 6)}-${result.substring(6, 9)}`;
  }

  setBaralho(baralho: Baralho) {
    this.baralho = baralho;
  }

  setUsuarios(usuarios: Usuario[]) {
    this.usuarios = usuarios;
  }

  setTarefas(tarefas: Tarefa[]) {
    this.tarefas = tarefas;
  }

  getId() {
    return this.id;
  }

  getBaralho() {
    return this.baralho;
  }

  getUsuarios() {
    return this.usuarios;
  }

  getTarefas() {
    return this.tarefas;
  }
}
