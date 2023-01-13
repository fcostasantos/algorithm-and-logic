const nota = 4.9;
const bomComportamento = true;

if (nota >= 7 && bomComportamento) // usando AND
    console.log('Parabéns!');

if ((nota < 7) && (nota > 5) || !bomComportamento) // usando OR
    console.log('Estude mais, perdeu.');

if (nota < 5 && bomComportamento)
    console.log('Você até se comportou, mas deu mole nos estudos');