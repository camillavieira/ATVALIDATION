import {
  calcularDesconto,
  calcularValorFinal
} from "../src/desconto";

describe("Desconto", () => {
  test("não deve aplicar desconto para subtotal de até R$100", () => {
    expect(calcularDesconto(100)).toBe(0);
  });

  test("deve aplicar 10% de desconto para subtotal acima de R$100", () => {
    expect(calcularDesconto(200)).toBe(20);
  });

  test("deve calcular o valor final sem desconto", () => {
    expect(calcularValorFinal(100)).toBe(100);
  });

  test("deve calcular o valor final com desconto", () => {
    expect(calcularValorFinal(200)).toBe(180);
  });
});