function compareNumbers(num1, num2) {
    const soma = num1 + num2;
    let verifica_dez = '';
    let verifica_vinte = '';

    soma >= 10 ? verifica_dez = 'maior que' : verifica_dez = 'menor que';
    soma >= 20 ? verifica_vinte = 'maior que' : verifica_vinte = 'menor que';

    if(num1 === num2) {
        return console.log('Os numeros '+num1+' e '+num2+' são iguais. Sua soma é '+soma+', que é '+verifica_dez+' 10 e '+verifica_vinte+' 20.');
    }
        
    else {
        return console.log('Os numeros '+num1+' e '+num2+' não são iguais. Sua soma é '+soma+', que é '+verifica_dez+' 10 e '+verifica_vinte+' 20.');
    }
}

compareNumbers(7, 7);