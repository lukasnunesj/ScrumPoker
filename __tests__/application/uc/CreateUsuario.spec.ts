import "reflect-metadata";
import { IUsuarioRepository } from "../../../src/core/domain/repositories/IUsuarioRepository";
import { UsuarioUC } from "../../../src/core/application/Usuario/UsuarioUC";
import { UsuarioRequest } from "../../../src/core/application/Usuario/Requests/UsuarioRequest";
import { Usuario } from "../../../src/core/domain/entities/Usuario";
import { UsuarioResponse } from "../../../src/core/application/Usuario/Response/UsuarioResponse";

// Mocking the dependencies
const mockUsuarioRepository: jest.Mocked<IUsuarioRepository> = {
  save: jest.fn(),
  get: jest.fn(),
};

describe(UsuarioUC, () => {
  let usuarioUC: UsuarioUC;

  beforeEach(() => {
    // Reset mock function calls before each test
    jest.clearAllMocks();
    usuarioUC = new UsuarioUC(mockUsuarioRepository);
  });

  it("should create a new Usuario and return a successful response", async () => {
    const request: UsuarioRequest = { data: { nome: "John" } };
    const usuarioResponse = await usuarioUC.createUsuario(request);

    expect(mockUsuarioRepository.save).toHaveBeenCalledTimes(1);
    expect(mockUsuarioRepository.save).toHaveBeenCalledWith(expect.any(Usuario));

    expect(usuarioResponse).toBeInstanceOf(UsuarioResponse);
    expect(usuarioResponse.success).toBe(true);
    expect(usuarioResponse.message).toBe("Usuário criado com sucesso!");
    expect(usuarioResponse.code).toBe(201);
  });

  // Add more test cases as needed
});
