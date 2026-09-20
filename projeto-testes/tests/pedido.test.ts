import { Pedido } from "../src/pedido";

describe("Pedido", () => {
  test("deve adicionar um produto ao pedido", () => {
    const pedido = new Pedido();

    pedido.adicionarProduto("Hambúrguer", 20, 1);

    expect(pedido.produtos).toHaveLength(1);
    expect(pedido.produtos[0].nome).toBe("Hambúrguer");
  });

  test("deve calcular o subtotal corretamente", () => {
    const pedido = new Pedido();

    pedido.adicionarProduto("Hambúrguer", 20, 2);
    pedido.adicionarProduto("Batata", 10, 1);
    pedido.adicionarProduto("Refrigerante", 7, 2);

    expect(pedido.calcularSubtotal()).toBe(64);
  });

  test("não deve aceitar preço negativo", () => {
    const pedido = new Pedido();

    expect(() => {
      pedido.adicionarProduto("Hambúrguer", -20, 1);
    }).toThrow();
  });

  test("não deve aceitar quantidade negativa", () => {
    const pedido = new Pedido();

    expect(() => {
      pedido.adicionarProduto("Hambúrguer", 20, -1);
    }).toThrow();
  });

  test("deve iniciar com status CRIADO", () => {
    const pedido = new Pedido();

    expect(pedido.status).toBe("CRIADO");
  });

  test("deve permitir alterar o status para EM_PREPARACAO", () => {
    const pedido = new Pedido();

    pedido.alterarStatus("EM_PREPARACAO");

    expect(pedido.status).toBe("EM_PREPARACAO");
  });

  test("não deve permitir entregar um pedido que não esteja PRONTO", () => {
    const pedido = new Pedido();

    expect(() => {
      pedido.alterarStatus("ENTREGUE");
    }).toThrow();
  });

  test("deve permitir entregar um pedido PRONTO", () => {
    const pedido = new Pedido();

    pedido.alterarStatus("PRONTO");
    pedido.alterarStatus("ENTREGUE");

    expect(pedido.status).toBe("ENTREGUE");
  });

  test("não deve permitir cancelar um pedido ENTREGUE", () => {
    const pedido = new Pedido();

    pedido.alterarStatus("PRONTO");
    pedido.alterarStatus("ENTREGUE");

    expect(() => {
      pedido.alterarStatus("CANCELADO");
    }).toThrow();
  });
    test("não deve permitir um pedido sem produtos", () => {
    const pedido = new Pedido();

    expect(() => {
      pedido.validarPedido();
    }).toThrow();
  });
});