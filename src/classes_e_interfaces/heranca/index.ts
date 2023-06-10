export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  public getNomeCompleto(): string {
    return 'isso é do aluno';
  }
}
export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return 'isso é da Pessoa';
  }
}

const aluno = new Aluno('ruan', 'portella', 18, '000.000.000-00', '0001');
const cliente = new Cliente('portella', 'ruan', 81, '00-000.000.000');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno.sala);
