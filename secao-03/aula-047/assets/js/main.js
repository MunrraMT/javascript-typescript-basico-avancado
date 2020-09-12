// FOR - CLÁSSICO - ESTRUTURA DE REPETIÇÃO

for (let i = 0; i <= 5; i++) {
	console.log(`Linha ${i}`);
}
/*
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5
*/

for (let i = -5; i <= 5; i++) {
	console.log(`Linha ${i}`);
}
/*
Linha -5
Linha -4
Linha -3
Linha -2
Linha -1
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5
*/

for (let i = 500; i >= 400; i -= 10) {
	console.log(`Linha ${i}`);
}
/*
Linha 500
Linha 490
Linha 480
Linha 470
Linha 460
Linha 450
Linha 440
Linha 430
Linha 420
Linha 410
Linha 400
*/

for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`Linha ${i}`);
	}
}
/*
Linha 0
Linha 2
Linha 4
Linha 6
Linha 8
Linha 10
*/

for (let i = 0; i <= 10; i++) {
	const par = i % 2 === 0 ? 'par' : 'ímpar';
	console.log(i, par);
}
/*
0 par
1 ímpar
2 par
3 ímpar
4 par
5 ímpar
6 par
7 ímpar
8 par
9 ímpar
10 par
*/

const frutas = ['Maça', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}
/*
Maça
Pêra
Uva
*/
