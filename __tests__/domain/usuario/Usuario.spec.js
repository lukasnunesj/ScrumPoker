"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("../../../src/core/domain/entities/Usuario");
describe("Usuario", () => {
    it("should create an instance", () => {
        const userStub = {
            name: "test",
        };
        const usuario = new Usuario_1.Usuario(userStub.name);
        expect(usuario.getNome()).toBe(userStub.name);
        expect(usuario.getId()).toBeDefined();
    });
});
