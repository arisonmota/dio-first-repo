
myArr = [2, 4, 5, 6, 7, 9, 12];

function elemPares(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    }
    )};

console.log('Numeros pares do Array: ',elemPares(myArr));