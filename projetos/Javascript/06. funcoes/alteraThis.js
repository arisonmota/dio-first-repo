const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Carla",
    idade: 50,
}

const animal = {
    nome: "Isis",
    idade: 1,
    raca: "SRD"
}


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

//console.log(calculaIdade.call(pessoa, 10));
console.log(calculaIdade.apply(animal, [10]));