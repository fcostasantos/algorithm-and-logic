let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 - Vai pro Shopping?  '; // Utilizando AND
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 - Vai pro Shopping?  '; // Utilizando OU
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true !== true);
console.log(true !== false );
console.log(false !== true);
console.log(false != false);

console.log('Não Verdadeiro  ' + !true); //negação lógica
console.log('Não Falso  '  + !false);

