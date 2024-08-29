// Loop pelos números de 1 a 200
for (let numero = 1; numero <= 200; numero++) {
    // Verifica se o número é divisível por 3 e 5
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("divisível por 3 e 5");
    }
    // Verifica se o número é divisível apenas por 3
    else if (numero % 3 === 0) {
        console.log("divisível por 3");
    }
    // Verifica se o número é divisível apenas por 5
    else if (numero % 5 === 0) {
        console.log("divisível por 5");
    }
    // Se o número não for divisível nem por 3 nem por 5, imprime o número
    else {
        console.log(numero);
    }
}
