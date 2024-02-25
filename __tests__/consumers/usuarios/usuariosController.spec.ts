import "reflect-metadata";
import { UsuariosController } from "../../../src/consumers/API/usuario/controllers/usuariosController";
import { IUsuarioUC } from "../../../src/core/application/Usuario/Ports/IUsuarioUC";
import { UsuarioRequest } from "../../../src/core/application/Usuario/Requests/UsuarioRequest";
import { UsuarioResponse } from "../../../src/core/application/Usuario/Response/UsuarioResponse";

// Mocking the dependencies
const mockUsuarioUC: jest.Mocked<IUsuarioUC> = {
  createUsuario: jest.fn(),
};

describe("UsuariosController", () => {
  let usuariosController: UsuariosController;
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    // Reset mock function calls before each test
    jest.clearAllMocks();

    usuariosController = new UsuariosController(mockUsuarioUC);
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it("should call createUsuario method of IUsuarioUC with request data and return response", async () => {
    const request: UsuarioRequest = { data: { nome: "John" } };
    const response: UsuarioResponse = {
      data: {
        id: "1",
        nome: "John",
      },
      success: true,
      message: "success",
      code: 200,
    };
    mockUsuarioUC.createUsuario.mockResolvedValueOnce(response);

    mockRequest.body = request.data;

    await usuariosController.criarUsuario(mockRequest, mockResponse);

    expect(mockUsuarioUC.createUsuario).toHaveBeenCalledTimes(1);
    expect(mockUsuarioUC.createUsuario).toHaveBeenCalledWith(expect.objectContaining(request));

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(response.code);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(response);
  });
});
