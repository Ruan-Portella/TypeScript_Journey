function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
console.log(showMessage(true));
console.log(showMessage(null));
console.log(showMessage(undefined));
console.log(showMessage({ nome: 'João' }));

export default 1;
