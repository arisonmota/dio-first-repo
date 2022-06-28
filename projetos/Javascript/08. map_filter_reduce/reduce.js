
const myArr = [2, 4, 5, 6, 7, 9, 12];
const precos = [
    {
        nome: 'Arroz',
        preco: 20,
    },

    {
        nome: 'Feijão',
        preco: 6,
    },
    
    {
        nome: 'Sabonete',
        preco: 2.5,
    },
];

var saldo = 600;

// somar os elementos do array "myArr"
function somaArray(arr) {
    return arr.reduce(function(prev, curr) {
        return prev + curr;
    })
}

// recebe uma lista de preços e e subtrai do saldo
function atualizaSaldo(saldo, precos) {
    return precos.reduce(function (prev, curr) {
        return prev - curr.preco;
    }, saldo);
}

console.log('Soma dos elementos do Array é igual a', somaArray(myArr));
console.log('Saldo disponível após as compras:', atualizaSaldo(saldo, precos));