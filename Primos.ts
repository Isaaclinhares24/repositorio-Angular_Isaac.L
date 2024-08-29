// Função para verificar se um número é primo
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Função principal para encontrar e imprimir números primos
function printPrimesInRange(range: number): void {
    const primes: number[] = [];

    for (let i = 2; i <= range; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    console.log('Números primos dentro dos primeiros 50 números decimais:');
    console.log(primes.join(', '));
}

// Imprimir números primos dentro dos primeiros 50 números decimais
printPrimesInRange(50);
