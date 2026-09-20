export type StatusPedido =
  | "CRIADO"
  | "EM_PREPARACAO"
  | "PRONTO"
  | "ENTREGUE"
  | "CANCELADO";

export interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

export class Pedido {
  produtos: Produto[] = [];
  status: StatusPedido = "CRIADO";

  adicionarProduto(
    nome: string,
    preco: number,
    quantidade: number
  ): void {
    if (preco < 0) {
      throw new Error("O preço não pode ser negativo.");
    }

    if (quantidade < 0) {
      throw new Error("A quantidade não pode ser negativa.");
    }

    this.produtos.push({
      nome,
      preco,
      quantidade
    });
  }

    calcularSubtotal(): number {
    return this.produtos.reduce(
      (total, produto) =>
        total + produto.preco * produto.quantidade,
      0
    );
  }

  validarPedido(): void {
    if (this.produtos.length === 0) {
      throw new Error(
        "O pedido deve possuir pelo menos um produto."
      );
    }
  }

  alterarStatus(novoStatus: StatusPedido): void {
    if (
      novoStatus === "ENTREGUE" &&
      this.status !== "PRONTO"
    ) {
      throw new Error(
        "O pedido só pode ser entregue depois de estar pronto."
      );
    }

    if (
      novoStatus === "CANCELADO" &&
      this.status === "ENTREGUE"
    ) {
      throw new Error(
        "Um pedido entregue não pode ser cancelado."
      );
    }

    this.status = novoStatus;
  }
}