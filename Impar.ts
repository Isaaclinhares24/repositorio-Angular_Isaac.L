// Declara a variável numero e atribui um valor inteiro
let numero: number = 10; // Você pode mudar esse valor para testar com outros números

// Variável para armazenar a soma dos números ímpares
let soma: number = 0;

// Loop de 1 até o valor de numero
for (let i = 1; i <= numero; i++) {
    // Verifica se o número é ímpar
    if (i % 2 !== 0) {
        soma += i; // Adiciona o número ímpar à soma
    }
}

// Imprime a soma dos números ímpares
console.log('A soma dos números ímpares de 1 até', numero, 'é:', soma);