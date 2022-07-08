
interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;  // ? indica atributo opcional
}

type umCachorroSomenteLeitura = {
    +readonly [K in keyof umCachorro]-?: umCachorro[K];
}

class umCachorro implements umCachorroSomenteLeitura {
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new umCachorro('Apolo', 7);