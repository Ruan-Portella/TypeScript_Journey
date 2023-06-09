type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Miranda',
};

console.log(pessoa);

export default 1;
