//#1: Função COM Parâmetro e Retorno

function somar(a, b) {
  return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 56)}`);

//#2: Função COM Parâmetro e SEM Retorno

function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

//3# Função SEM Parâmetros e COM Retorno

function retornaDataAtual() {
  return new Date();
}

console.log(retornaDataAtual());

//4#: Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
