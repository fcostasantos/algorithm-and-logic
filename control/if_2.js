const nota = 5;
const bomComportamento = true;

if (nota >= 7 && bomComportamento) // usando AND
    console.log('Parabéns!');

if ((nota < 7) && (nota > 5) || !bomComportamento) // usando OR
    console.log('Estude mais, perdeu.');

if (nota < 5 && bomComportamento)
    console.log('Você até se comportou, mas deu mole nos estudos');

if ((nota <= 5) && (nota < 6.9) || !bomComportamento)
    console.log('Seus pais estão convidados para próxima reunião pedagógica, reprovado.');