export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('ruan', 'portella', 20, '000.000.000-99');
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
