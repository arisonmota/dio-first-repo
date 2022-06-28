
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const myArr = [2, 3];

function mapComThis(array, thisArg) {
    return array.map(function(item) {
        return item * this.value;         
    }, thisArg);
}

function mapSemThis(array) {
    return array.map(function(item) {
        return item * 4;
    });
}

console.log("This-> maça", mapComThis(myArr, maca));
console.log("This-> laranja", mapComThis(myArr, laranja));
console.log("Map sem This", mapSemThis(myArr));
console.log("Array original", myArr);
