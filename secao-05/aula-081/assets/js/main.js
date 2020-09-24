// REDUCE - REDUZINDO O ARRAY
// MESMO PENSAMENTO QUE O FILTER
// RETORNA UM ÚNICO VALOR JUNNTANDO O ARRAY ORIGINAL
// SEM EFEITO COLATERAL NO ARRAY ORIGINAL

// EXERCÍCIO 01
// SOME TODOS OS NÚMEROS (REDUCE)
// RETORNE UM ARRAY COM OS PARES (FILTER)
// RETORNE UM ARRAY COM O DOBRO DOS VALORES(MAP)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// SOLUÇÃO COM REDUCE 01
const solucaoProfessorA1 = numeros.reduce(function (
	acumulador,
	valorAtual,
	indice,
	arrayCompleto
) {
	acumulador += valorAtual;
	return acumulador;
},
0); // 0 = Primeiro valor do Acumulador!
console.log(solucaoProfessorA1); // 236 -> SOMA DE TODOS OS VALORES DO ARRAY

// SOLUÇÃO COM REDUCE 02 -> NÃO RECOMENDADO!
const solucaoProfessorA2 = numeros.reduce(function (
	acumulador,
	valorAtual,
	indice,
	arrayCompleto
) {
	if (valorAtual % 2 === 0) acumulador.push(valorAtual);
	return acumulador;
},
[]);
console.log(solucaoProfessorA2); // [ 50, 80, 2, 8, 22 ]

// SOLUÇÃO COM REDUCE 03 -> NÃO RECOMENDADO!
const solucaoProfessorA3 = numeros.reduce(function (
	acumulador,
	valorAtual,
	indice,
	arrayCompleto
) {
	acumulador.push(valorAtual * 2);
	return acumulador;
},
[]);
console.log(solucaoProfessorA3);
/*
[
    10, 100, 160,  2,  4,  6,
    10,  16,  14, 22, 30, 44,
    54
]
*/

// EXERCÍCIO 02
// RETORNE A PESSOA MAIS VELHA
const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];

// SOLUÇÃO COM REDUCE 01A
const solucaoProfessorB1A = pessoas.reduce(function (acumulador, valorAtual) {
	console.log(acumulador, valorAtual);
}, 0);
/*
0 { nome: 'Luiz', idade: 62 }
undefined { nome: 'Maria', idade: 23 }
undefined { nome: 'Eduardo', idade: 55 }
undefined { nome: 'Letícia', idade: 19 }
undefined { nome: 'Rosana', idade: 32 }
undefined { nome: 'Wallace', idade: 47 }
*/

// SOLUÇÃO COM REDUCE 01B
const solucaoProfessorB1B = pessoas.reduce(function (acumulador, valorAtual) {
	// Faz uma comparação entre propriedades dos objetos e retorna objeto com valor da propriedade idade mais alto.
	if (acumulador.idade > valorAtual.idade) return acumulador;
});
console.log(solucaoProfessorB1B); // { nome: 'Luiz', idade: 62 }
