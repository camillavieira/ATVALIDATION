# Projeto de Testes - Sistema de Pedidos

## 1. Objetivo

O projeto tem como objetivo desenvolver um sistema simples para controle de pedidos de uma lanchonete, utilizando TypeScript e testes automatizados com Jest.

O sistema permite cadastrar clientes, adicionar produtos aos pedidos, calcular valores, aplicar descontos e controlar o status dos pedidos.

## 2. Tecnologias utilizadas

- TypeScript
- Node.js
- Jest
- ts-jest
- VS Code / GitHub Codespaces

## 3. Regras de negócio

### RN01 - Cliente

O nome do cliente não pode estar vazio e deve possuir pelo menos 3 caracteres.

### RN02 - Pedido

Um pedido deve possuir pelo menos um produto.

### RN03 - Desconto

- Subtotal maior que R$100: desconto de 10%.
- Subtotal menor ou igual a R$100: não possui desconto.

### RN04 - Valores negativos

Não são permitidos preços ou quantidades menores que zero.

### RN05 - Status do pedido

Os status disponíveis são:

- CRIADO
- EM_PREPARACAO
- PRONTO
- ENTREGUE
- CANCELADO

### RN06 - Cancelamento

Um pedido que já foi entregue não pode ser cancelado.

### RN07 - Entrega

Um pedido só pode ser marcado como ENTREGUE depois de estar no status PRONTO.

## 4. Produtos

Os produtos utilizados no sistema são:

| Produto | Preço |
|---|---:|
| Hambúrguer | R$20,00 |
| Batata | R$10,00 |
| Refrigerante | R$7,00 |
| Sobremesa | R$8,00 |

## 5. Estrutura do projeto

```text
projeto-testes/
├── src/
│   ├── cliente.ts
│   ├── pedido.ts
│   └── desconto.ts
├── tests/
│   ├── cliente.test.ts
│   ├── pedido.test.ts
│   └── desconto.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md