function multiplos3e5(numero){
    let sum = 0
    for(let i = 0; i < numero; i++){
        if(i % 3 === 0){
            sum += i
        }else if (i % 5 === 0){
            sum += i
        }
    }
    return sum   
}   
    
function exiberesultado(resultado){
    console.log('O resultado dos multiplos de 3 e 5 é  ${resultado}')
}
multiplos3e5(20);