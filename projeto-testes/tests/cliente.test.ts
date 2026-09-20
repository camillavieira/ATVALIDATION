import { Cliente } from "../src/cliente";

describe("Cliente", () => {
  test("deve cadastrar um cliente com nome válido", () => {
    const cliente = new Cliente("Maria");

    expect(cliente.nome).toBe("Maria");
  });

  test("não deve aceitar nome vazio", () => {
    expect(() => new Cliente("")).toThrow();
  });

  test("não deve aceitar nome com menos de 3 caracteres", () => {
    expect(() => new Cliente("Jo")).toThrow();
  });

  test("não deve aceitar nome contendo apenas espaços", () => {
    expect(() => new Cliente("   ")).toThrow();
  });
});