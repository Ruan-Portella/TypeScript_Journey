export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('ruan', 'portella', 20, '000.000.000-99');
const pessoa2 = Pessoa.criaPessoa('Ruan', 'Portella');
pessoa.cpf = '123.456.789-00';
console.log(pessoa2);
