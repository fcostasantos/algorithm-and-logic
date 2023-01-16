const nota = 11;


if (nota <= 10 && nota >= 9) {
    console.log('Conceito \n A');
}

if (nota < 9 && nota >= 7) {
    console.log('Conceito \n B');
}

if (nota < 7 && nota >= 5) {
    console.log('Conceito \n C');
}

if (nota < 5 && nota >= 4.5) {
    console.log('Conceito \n D');
}

if (nota >= 0 && nota < 4.5) {
    console.log('Conceito \n F');
}

if (nota >= 10.1) {
    console.log('Valor inválido, digite novamente.');
}