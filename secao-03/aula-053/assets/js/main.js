// WHILE E DO WHILE - ESTRUTURA DE REPETIÇÃO
let i = 0;
while (i <= 10) {
	if (i < 10) {
		console.log(`0${i}`);
	} else {
		console.log(i);
	}
	i++;
}
console.log('segue e a vida!');

const nome = 'Luiz';
i = 0;
while (i < nome.length) {
	console.log(nome[i]);
	i++;
}
console.log('segue e a vida!');

function random(min, max) {
	const r = Math.random() * (max - min) + min;
	return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);
while (rand !== 10) {
	rand = random(min, max);
	console.log(rand);
}

rand = 10;
do {
	console.log(rand);
} while (rand !== 10);
