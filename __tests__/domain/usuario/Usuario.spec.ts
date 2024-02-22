import { Usuario } from "../../../src/core/domain/entities/Usuario";
import { NomeInvalidoError } from "../../../src/core/domain/errors/NomeInvalidoError";
import { IUsuarioRepository } from "../../../src/core/domain/repositories/IUsuarioRepository";

const mockUsuarioRepository = jest.mocked<IUsuarioRepository>({
  save: jest.fn(),
  get: jest.fn(),
});

describe("Usuario", () => {
  beforeEach(() => {
    mockUsuarioRepository.save.mockClear();
  });

  describe("constructor", () => {
    it("should create an instance with valid data", () => {
      const userStub = {
        name: "test",
      };

      const usuario = new Usuario(userStub.name);
      expect(usuario.getNome()).toBe(userStub.name);
      expect(usuario.getId()).toBeDefined();
    });

    it("should throw an error if name is empty", () => {
      expect.assertions(4);
      expect(() => new Usuario(undefined)).toThrow("Nome inválido");
      expect(() => new Usuario(" ")).toThrow("Nome inválido");
      expect(() => new Usuario("")).toThrow("Nome inválido");
      expect(() => new Usuario(null)).toThrow("Nome inválido");
    });
  });

  describe("create", () => {
    it("should call save method of usuarioRepository when create method is called with valid data", () => {
      const userStub = {
        name: "test",
      };
      const usuario = new Usuario(userStub.name);

      usuario.create(mockUsuarioRepository);

      expect(mockUsuarioRepository.save).toHaveBeenCalled();
    });

    it("should not call save method of usuarioRepository when create method is called with invalid data", async () => {
      expect.assertions(2);

      try {
        const usuario = new Usuario("");
        await usuario.create(mockUsuarioRepository);
      } catch (error) {
        expect(error).toBeInstanceOf(NomeInvalidoError);
      }

      expect(mockUsuarioRepository.save).not.toHaveBeenCalled();
    });
  });
});
