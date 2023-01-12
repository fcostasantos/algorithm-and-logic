// Criar duas expressões que irão resultar em true (aritmeticos/relacionais/lógicos)

// Criar duas expressões que irão resultar em false (aritmeticos/relacionais/lógicos)


const paloso = true;
const cheiroMole = false;
const fanikiter = false;
const frio = true;


let psico = paloso != cheiroMole;
console.log("trkm é psico" , psico);

let comedia = cheiroMole != paloso
console.log("dents é comedia" , comedia);

let psicologicoFraco = paloso != fanikiter;
console.log("Loide é fraco psicologicamente" , psicologicoFraco);

let dormiComFrioOntem = frio;
console.log("Dormi com frio ontem?" , dormiComFrioOntem);

const precisao = true;
const calor = true;

let miraFria = precisao != calor;
console.log("A mira de dents é boa? " , miraFria);

const rush = true;
const vidaBaixa = true;

let taNaVida = rush != vidaBaixa;
console.log("Baiano cai pra dentro quando ver alguém na merda?" , taNaVida);

let verdadeira1 = 2 + 5 >= 7 && 8 > 2;
let verdadeira2 = !(5 * 5 > 36);

console.log(verdadeira1);
console.log(verdadeira2);

let falso1 = 20 - 4 > 26 || false || 15 === '15';
let falso2 = !(21 !== 20 + 1 || '6' !== 6);

console.log(falso1);
console.log(falso2);