
/*Solução 1

function verificaPalindromo(string) {
    if(!string) return "Entre com um texto válido";

    if (string.split("").reverse().join("") === string) {
        return "É um palíndromo";
    }
    else {
        return "Não é um palíndromo";
    }

}

console.log(verificaPalindromo("Ovo")); */

//Solução 2

function verificaPalindromo(string) {
    if(!string) return "Entre com um texto válido" 

    for (let i = 0; i < string.length/2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return "Não é palindromo";
        }

    }
    
    return "É palíndromo";
}

console.log(verificaPalindromo("ovo")); 

/*Solução 3

function verificaPalindromo(string) {
    if(!string) return "Entre com um texto válido";

    let reverseString = string.split("").reverse().join("");
   
    if (reverseString == string) {
        return "É palíndromo";
    }
    else return "Não é palíndromo";
}

console.log(verificaPalindromo("ana"));*/
