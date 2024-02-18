import { Usuario } from "../../../src/core/domain/entities/Usuario";

describe("Usuario", () => {
  it("should create an instance", () => {
    const userStub = {
      name: "test",
    };

    const usuario = new Usuario(userStub.name);
    expect(usuario.getNome()).toBe(userStub.name);
    expect(usuario.getId()).toBeDefined();
  });
});
