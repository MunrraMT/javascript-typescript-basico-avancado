// FUNÇÕES GERADORAS

// FUNÇÃO GERADORA DE 3 RETORNOS DIFERENTES
function* geradora1() {
	// Código
	yield 'Valor 01';
	// Código
	yield 'Valor 02';
	// Código
	yield 'Valor 03';
}

const g1 = geradora1();
console.log(g1.next().value); // Valor 01
console.log(g1.next().value); // Valor 02
console.log(g1.next()); // { value: 'Valor 03', done: false }
console.log(g1.next()); // { value: undefined, done: true }

const g2 = geradora1();
console.log(g2.next()); // { value: 'Valor 01', done: false }
console.log(g2.next()); // { value: 'Valor 02', done: false }
console.log(g2.next()); // { value: 'Valor 03', done: false }
console.log(g2.next()); // { value: undefined, done: true }

const g3 = geradora1();
for (const valor of g3) {
	console.log(valor);
}
/*
Valor 01
Valor 02
Valor 03
*/

// FUNÇÃO GERADORA INFINITA
function* geradora2() {
	let i = 0;
	while (true) {
		yield i;
		i++;
	}
}

const g4 = geradora2();
console.log(g4.next().value); // 0
console.log(g4.next().value); // 1
console.log(g4.next().value); // 2
console.log(g4.next().value); // 3
console.log(g4.next().value); // 4
console.log(g4.next().value); // 5

// FUÇÃO GERADORA QUE CHAMA OUTRA FUNÇÃO GERADORA
function* geradora3() {
	yield 0;
	yield 1;
	yield 2;
}

function* geradora4() {
	yield* geradora3(); // Chamando outra função geradora (yeld*)
	yield 3;
	yield 4;
	yield 5;
}

const g5 = geradora4();
for (const i of g5) {
	console.log(i);
}
/*
0
1
2
3
4
5
*/

// FUNÇÃO GERADORA QUE CHAMA OUTRAS FUNÇÕES EM ORDEM LISTADA
function* geradora5() {
	yield teste1();
	yield teste2();
	yield teste3();
}

function teste1() {
	return 'Função teste1';
}

function teste2() {
	return 'Função teste2';
}

function teste3() {
	return 'Função teste3';
}

const g6 = geradora5();
for (const i of g6) {
	console.log(i);
}
/*
Função teste1
Função teste2
Função teste3
*/

// FUNÇÃO GERADORA COM FUNÇÕES DENTRO
function* geradora6() {
	yield function () {
		console.log('Vim do y1');
	};

	// Código

	yield function () {
		console.log('Vim do y2');
	};
}

const g7 = geradora6();
const func1 = g7.next().value;
const func2 = g7.next().value;
func1(); // Vim do y1
func2(); // Vim do y2

// FUNÇÃO GERADORA COM RETURN
function* geradora7() {
	yield function () {
		console.log('Vim do y1');
	};

	// QUANDO RETURN É USADO, NADA MAIS É EXETUCADO
	return function () {
		console.log('Vim do Return');
	};

	// Código

	yield function () {
		console.log('Vim do y2');
	};
}

const g8 = geradora7();
const func4 = g8.next().value;
const func5 = g8.next().value;
const func6 = g8.next().value;
func4(); // Vim do y1
func5(); // Vim do Return
func6(); // ERRO NO CÓDIGO
