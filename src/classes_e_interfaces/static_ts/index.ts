export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
}

const pessoa = new Pessoa('ruan', 'portella', 20, '000.000.000-99');
pessoa.cpf = '123.456.789-00';
