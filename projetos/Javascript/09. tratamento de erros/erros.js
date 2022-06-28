/*Tratamento de erros

Crie uma função que recebe um array e um numero e valide: se os parametros não forem enviados lance um erro ReferenceError; Se o array não for tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance também um TypeError e se o tamanho do array != do numero enviado como parametro, lance um RangeError.
Utilize try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando Instanceof
*/

function trataErros(num, array) {
    try {
        if (!num || !array) throw new ReferenceError('Número ou array inválido(s)');
        if (typeof array != 'object') throw new TypeError('Array deve ser um Object');
        if (typeof num != 'number') throw new TypeError('Número inválido');
        if (array.length != num) throw new RangeError('Array deve ter o tamanho do número informado');
        return `Array digitado foi [${array}]`;
    }
    catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Este é um ReferenceError");
            console.log(e.name, e.stack)
        } else if(e instanceof TypeError) {
            console.log("Este é um TypeError");
            console.log(e.name, e.stack)
        } else if(e instanceof RangeError) {
            console.log("Este é um RangeError");
            console.log(e.name, e.stack)
        } else {
            console.log('Erro não esperado' + e)
        }
    }
}

console.log(trataErros(3, [2, 4 , 5]));