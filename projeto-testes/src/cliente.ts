export class Cliente {
  nome: string;

  constructor(nome: string) {
    if (!nome || nome.trim().length < 3) {
      throw new Error(
        "O nome do cliente deve possuir pelo menos 3 caracteres."
      );
    }

    this.nome = nome.trim();
  }
}