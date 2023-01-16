const hora = 22;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
} else {
    if (hora < 18) {
        saudacao = 'Boa tarde!';
    } else {
        if (hora < 22) {
            saudacao = 'Boa noite';  //mesma proposta do exercício 4, só que mais bagunçado.
        } else {
            saudacao = 'Muito Tarde';
        }

    }

}


console.log(saudacao);