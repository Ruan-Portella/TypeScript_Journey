const dadosCliente1: readonly [number, string?] = [1, 'João'];
const dadosCliente2: [number, string, ...string[]] = [1, 'João'];

dadosCliente2[0] = 100;
dadosCliente2[1] = 'João Pedro';
dadosCliente2[2] = 'Ana';
dadosCliente2[3] = 'Maria';
dadosCliente2[4] = 'José';

console.log(dadosCliente1);
console.log(dadosCliente2);
