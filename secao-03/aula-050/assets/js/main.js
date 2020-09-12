// FOR IN - ESTRUTURA DE REPETIÇÃO
// LÊ OS ÍNDICES DO ARRAY OU AS CHAVES DE UM OBJETO

// USANDO FOR IN EM UM ARRAY
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas) {
	console.log(frutas[i]);
}
/*
Pera
Maça
Uva
*/

// USANDO FOR IN EM UM OBJETO
const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Otávio',
	idade: 30,
};

for (let i in pessoa) {
	console.log(i);
}
/*
nome
sobrenome
idade
*/

for (let i in pessoa) {
	console.log(i, pessoa[i]);
}
/*
nome Luiz
sobrenome Otávio
idade 30
*/
