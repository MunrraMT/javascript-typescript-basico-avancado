// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisíbel por 3 = Fizz
// Número é divisíbel por 5 = Buzz
// Número é divisíbel por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número.
// Checar se o número é realmente um número
// Use a função com números 0 a 100

function minhaSolucao(numero) {
	if (typeof numero === 'number') {
		if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
		if (numero % 3 === 0) return 'Fizz';
		if (numero % 5 === 0) return 'Buzz';
		return numero;
	}
	return 'Não é um número';
}

console.log(minhaSolucao('s')); // Não é um número
console.log(minhaSolucao(1)); // 1
console.log(minhaSolucao(3)); // Fizz
console.log(minhaSolucao(5)); // Buzz
console.log(minhaSolucao(15)); // FizzBuzz

for (let i = 0; i <= 100; i++) {
	console.log(minhaSolucao(i));
}

console.log('#############');

function solucaoDoProfessor1(numero) {
	if (typeof numero !== Number) return numero;
	if (numero % 3 === 0) return 'Fizz';
	if (numero % 5 === 0) return 'Buzz';
	if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
	return numero;
}

for (let i = 0; i <= 100; i++) {
	console.log(i, solucaoDoProfessor1(i));
}
