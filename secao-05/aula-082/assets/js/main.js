// FILTER + MAP + REDUCE

// EXERCÍCIO 01
// RETORNE A SOMA DO DOBRO DE TODOS OS PARES
// FILTRAR PARES
// DOBRAR OS VALORES
// REDUZIR (SOMAR TUDO)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// MINHA SOLUÇÃO A
const minhaSolucaoA1 = numeros.filter((valor) => valor % 2 === 0);
const minhaSolucaoA2 = minhaSolucaoA1.map((valorAtual) => valorAtual * 2);
const minhaSolucaoA3 = minhaSolucaoA2.reduce((acumulador, valorAtual) => {
	acumulador += valorAtual;
	return acumulador;
});

console.log(minhaSolucaoA1); // Números Pares: [ 50, 80, 2, 8, 22 ]
console.log(minhaSolucaoA2); // O dobro dos números: [ 100, 160, 4, 16, 44 ]
console.log(minhaSolucaoA3); // A soma total: 324

// MINHA SOLUÇÃO B
const minhaSolucaoB1 = numeros
	.filter((valor) => valor % 2 === 0)
	.map((valor) => valor * 2)
	.reduce((acumulador, valorAtual) => {
		acumulador += valorAtual;
		return acumulador;
	});
console.log(minhaSolucaoB1); // 324

// SOLUÇÃO DO PROFESSOR 01
const numerosPares1 = numeros
	.filter(function (valor) {
		return valor % 2 === 0;
	})
	.map(function (valor) {
		return valor * 2;
	})
	.reduce(function (acumulador, valor) {
		return acumulador + valor;
	});
console.log(numerosPares1); // 324

// SOLUÇÃO DO PROFESSOR 02
const numerosPares2 = numeros
	.filter((valor) => valor % 2 === 0)
	.map((valor) => valor * 2)
	.reduce((acumulador, valor) => acumulador + valor);
console.log(numerosPares2); // 324
