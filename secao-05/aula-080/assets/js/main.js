// MAP - MAPEANDO O ARRAY
// MESMO PENSAMENTO QUE O FILTER
// RETORNA UM NOVO ARRAY COM O MESMO TAMANHO, MAS COM VALORES ALTERADOS
// SEM EFEITO COLATERAL NO ARRAY ORIGINAL

// EXERCÍCIO 01
// DOBRAR OS VALORES DOS ELEMENTOS DO ARRAY
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// RESOLVENDO COM FOR
let novoNumero = [];
for (let i = 0; i < numeros.length; i++) {
	novoNumero.push(numeros[i] * 2);
}
console.log(novoNumero);

// RESOLVENDO COM MAP 01
const minhaSolucaoA1 = numeros.map(function (valor, indice, arrayCompleto) {
	return valor * 2;
});
console.log(minhaSolucaoA1);
/*
[
    10, 100, 160,  2,  4,  6,
    10,  16,  14, 22, 30, 44,
    54
]
*/

// RESOLVENDO COM MAP 02
const minhaSolucaoA2 = numeros.map((valor) => valor * 2);
console.log(minhaSolucaoA2);
/*
[
    10, 100, 160,  2,  4,  6,
    10,  16,  14, 22, 30, 44,
    54
]
*/

// RESOLVENDO COM MAP 03
const minhaSolucaoA3 = numeros.map((valor) => {
	let novovalor = valor * 2;
	return `Novo valor: ${novovalor}`;
});
console.log(minhaSolucaoA3);
/*
[
    'Novo valor: 10',
    'Novo valor: 100',
    'Novo valor: 160',
    'Novo valor: 2',
    'Novo valor: 4',
    'Novo valor: 6',
    'Novo valor: 10',
    'Novo valor: 16',
    'Novo valor: 14',
    'Novo valor: 22',
    'Novo valor: 30',
    'Novo valor: 44',
    'Novo valor: 54'
]
*/

// EXERCÍCIO 02
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];

// RESOLVENDO COM MAP 01
const minhaSolucaoB1 = pessoas.map((valor) => valor.nome);
console.log(minhaSolucaoB1); // [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]

// RESOLVENDO COM MAP 02A
const minhaSolucaoB2 = pessoas.map((valor) => {
	return { idade: valor.idade };
});
console.log(minhaSolucaoB2);
/*
[
    { idade: 62 },
    { idade: 23 },
    { idade: 55 },
    { idade: 19 },
    { idade: 32 },
    { idade: 47 }
]
*/

// RESOLVENDO COM MAP 02B
// Uso dos parenteses entre as chaves do objeto, faz com que mantenha a expressão.
const solucaoProfessorB2 = pessoas.map((valor) => ({ idade: valor.idade }));
console.log(solucaoProfessorB2);
/*
[
    { idade: 62 },
    { idade: 23 },
    { idade: 55 },
    { idade: 19 },
    { idade: 32 },
    { idade: 47 }
]
*/

// RESOLVENDO COM MAP 03A
const minhaSolucaoB3A = pessoas.map((valor, indice) => {
	return { id: indice, nome: valor.nome, idade: valor.idade };
});
console.log(minhaSolucaoB3A);
/*
[
    { id: 0, nome: 'Luiz', idade: 62 },
    { id: 1, nome: 'Maria', idade: 23 },
    { id: 2, nome: 'Eduardo', idade: 55 },
    { id: 3, nome: 'Letícia', idade: 19 },
    { id: 4, nome: 'Rosana', idade: 32 },
    { id: 5, nome: 'Wallace', idade: 47 }
]
*/

// RESOLVENDO COM MAP 03B
const minhaSolucaoB3B = pessoas.map((valor, indice) => {
	const newObj = { ...valor }; // Copiou o Objeto com Spread Operator(...)
	newObj.id = indice; // Adicionou um novo parâmetro ao final do Objeto
	return newObj;
});
console.log(minhaSolucaoB3B);
/*
[
    { nome: 'Luiz', idade: 62, id: 0 },
    { nome: 'Maria', idade: 23, id: 1 },
    { nome: 'Eduardo', idade: 55, id: 2 },
    { nome: 'Letícia', idade: 19, id: 3 },
    { nome: 'Rosana', idade: 32, id: 4 },
    { nome: 'Wallace', idade: 47, id: 5 }
]
*/
