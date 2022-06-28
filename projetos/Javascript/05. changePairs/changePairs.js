//Trocar elementos pares de um array e diferentes de 0 por 0.

function changePairs(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && array[i] != 0) {
            array[i] = 0;
        }
    }
    return array;    
}

console.log(changePairs([]));
console.log(changePairs([1, 2, 77, 8, 0, 9]));