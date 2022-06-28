const alunos = [
    {
        nome: "João",
        nota: 4,
        turma: "101N",
    },

    {
        nome: "Caio",
        nota: 8,
        turma: "102T",
    },

    {
        nome: "Hugo",
        nota: 10,
        turma: "102T",
    }
];

function retornaAprovados(array, media) {
    
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(retornaAprovados(alunos, 6));