const t1 = false;
const t2 = false;

let comprarTV52 = t1 && t2; //AND
console.log('Vamos comprar a tv de 52" ' , comprarTV52); 

let comprarTV32 = t1 !== t2; // XOR
 console.log('Vamos comprar a tv de 32" ' , comprarTV32); 

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete? ' , tomarSorvete); 

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa?' , ficarEmCasa); 