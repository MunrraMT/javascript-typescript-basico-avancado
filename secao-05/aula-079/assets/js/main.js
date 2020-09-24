// FILTER - FILTRANDO O ARRAY.
// SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS.
// SEM EFEITO COLATERAL.

// EXERCÍCIO 01 - RETORNE OS NÚMEROS MAIORES QUE 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// RESOLVENDO COM FOR
let novoNumeros = [];
for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] > 10) {
		novoNumeros.push(numeros[i]);
	}
}
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// RESOLVENDO COM FILTER 01 - ITERA SOBRE TODOS OS ELEMENTOS DE UM ARRAY
// ITERA SOBRE TODOS OS ELEMENTOS DE UM ARRAY
// PRECISA DE UMA RETORNO BOOLEANA, DA FUNÇÃO DE CALLBACK
novoNumeros = numeros.filter(callBackFilterA);
function callBackFilterA(valor, indice, arrayCompleto) {
	// valor = Elemento do Array
	// indice = Índice do elemento do Array
	// arrayCompleto = Puxa o Array completo
	if (valor > 10) return true;
	return false;
}
// NOVO ARRAY COM OS ELEMENTOS COM VALOR MAIOR QUE 10
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// RESOLVENDO COM FILTER 02
novoNumeros = numeros.filter(callBackFilterB);
function callBackFilterB(valor, indice, arrayCompleto) {
	return valor > 10;
}
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// RESOLVENDO COM FILTER 03
novoNumeros = numeros.filter(function (valor) {
	return valor > 10;
});
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// RESOLVENDO COM FILTER 04 - COM ARROW FUNCTION
novoNumeros = numeros.filter((valor) => {
	return valor > 10;
});
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// RESOLVENDO COM FILTER 05 - COM ARROW FUNCTION
novoNumeros = numeros.filter((valor) => valor > 10); // valor = Elemento do Array
console.log(novoNumeros); // [ 50, 80, 11, 15, 22, 27 ]

// EXERCÍCIO 02
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];

const minhaSolucao1 = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(minhaSolucao1);
/*
[
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]
*/

const minhaSolucao2 = pessoas.filter((valor) => valor.idade > 50);
console.log(minhaSolucao2); // [ { nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 } ]

const minhaSolucao3A = pessoas.filter((valor) => {
	return valor.nome[valor.nome.length - 1] === 'a';
});
console.log(minhaSolucao3A);
/*
[
    { nome: 'Maria', idade: 23 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 }
]
*/

const minhaSolucao3B = pessoas.filter(
	(valor) => valor.nome[valor.nome.length - 1] === 'a'
);
console.log(minhaSolucao3B);
/*
[
    { nome: 'Maria', idade: 23 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 }
]
*/

const solucaoProfessor = pessoas.filter((valor) => {
	return valor.nome.toLowerCase().endsWith('a');
});
console.log(minhaSolucao3B);
/*
[
    { nome: 'Maria', idade: 23 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 }
]
*/
