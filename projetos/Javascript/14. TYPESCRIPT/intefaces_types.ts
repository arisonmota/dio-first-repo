/*auxilia na tipagem de parâmetros

function soma(a: number, b: number) {
    return a + b;
}
*/

/*Usado para criação de interfaces - contratos de estruturas de dados

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático' | 'aéreo';
    domestico: boolean;
    executarRugido(alturaEmDb: number): void;
}

interface IFelino extends IAnimal {
    raca: string;
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    raca: string;
    porte: 'pequeno' | 'médio' | 'grande';
}

const animal: IAnimal = {
    nome: 'Cobra',
    tipo: 'terrestre',
    domestico: false,
    executarRugido: (alturaEmDb) => (`${alturaEmDb}dB`)
}

const felino: IFelino = {
    nome: 'Gato',
    tipo: 'terrestre',
    raca: 'SRD',
    domestico: true,
    visaoNoturna: true,
    executarRugido: (alturaEmDb) => (`${alturaEmDb}dB`)
}
*/

//Também usado para criar Types - fazer junções de interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático' | 'aéreo';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

type TDomestico = IFelino | ICanino;

const animal: TDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'médio',
    tipo: 'terrestre',
}