//Dado um array, retorna outro contendo valores únicos

const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueVals(arr) {
    const mySet = new Set(arr);
    return [...mySet];  //feito spread para que seja retornado um array e nao um Set
}

console.log(uniqueVals(myArr));