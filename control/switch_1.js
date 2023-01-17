let nota = 12;

switch (Math.ceil(nota)) {
    default:
        console.log('Nota inválida')
        break;
    case 10:
    case 9:
    case 8:
    case 7:
        console.log('Parabéns!');
        break;
    case 6:
    case 5:
    case 4:
    case 3:
        console.log('Reprovado!');
        break;
    case 2:
    case 1:
    case 0:
        console.log('Defeat.');
}