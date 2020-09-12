// FOR OF - ESTRUTURA DE REPETIÇÃO
const nome = 'Luiz Otávio';

for (let i of nome) {
	console.log(i);
}
/*
L
u
i
z

O
t
á
v
i
o
*/

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i of nomes) {
	console.log(i);
}
/*
Luiz
Otávio
Henrique
*/

// FOREACH - ESTRUTURA DE REPETIÇÃO
nomes.forEach(function (elemento, indice) {
	console.log(`${elemento} do índice ${indice}`);
});
/*
Luiz do índice 0
Otávio do índice 1
Henrique do índice 2
*/
