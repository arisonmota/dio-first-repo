
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(()=> valor);
}

adicionaApendiceALista([2, 3], 4);