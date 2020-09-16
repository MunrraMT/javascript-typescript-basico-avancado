// Parâmetros da função
function funcao() {
	console.log('Oi!');
}
funcao();

// arguments = local onde é salvo todos os argumentos enviados
function funcao2() {
	console.log(arguments);
}
funcao2('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/*
[Arguments] {
	'0': 'valor',
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'10': 10
}
*/

function funcao3() {
	let total = 0;
	for (const argumento of arguments) {
		total += Number(argumento);
	}
	console.log(typeof total, total);
}
funcao3(1, 2, 3, 4, 5, 6, 7); // number 28

function funcao4(a, b, c, d, e, f) {
	console.log(a, b, c, d, e, f);
}
funcao4(1, 2, 3); // 1 2 3 undefined undefined undefined

// Quantidade de Argumentos menor que Parâmetros
function funcao5(a, b) {
	console.log(a + b);
}
funcao5(2); // NaN

// Uso do valor padrão no parâmetro sem argumento
function funcao6(a, b = 0) {
	console.log(a + b);
}
funcao6(2); // 2
funcao6(2, 3); // 5

function funcao7(a, b = 0, c = 4) {
	console.log(a + b + c);
}
funcao7(2); // 6
funcao7(2, 20); // 26
funcao7(2, 10, 20); // 32
funcao7(2, '', 20); // 220 - String vazia, acabou concatenando
// funcao7(2,, 20); // error
funcao7(2, undefined, 20); // 22 - pulou o 'b'

// Atribuição por desestruturação
function funcao8({ nome, sobrenome, idade }) {
	console.log(nome, sobrenome, idade);
}
funcao8({ nome: 'André', sobrenome: 'Rodrigues', idade: 30 }); // André Rodrigues 30
let objFuncao8 = { nome: 'André', sobrenome: 'Rodrigues', idade: 30 };
funcao8(objFuncao8); // André Rodrigues 30

function funcao9([valor1, valor2, valor3]) {
	console.log(valor1, valor2, valor3);
}
funcao9(['André', 'Rodrigues', 30]); // André Rodrigues 30
let objFuncao9 = ['André', 'Rodrigues', 30];
funcao9(objFuncao9); // André Rodrigues 30

function funcao10(operador, acumulador, ...numeros) {
	console.log(operador, acumulador, numeros);
}
funcao10('+', 0, [20, 30, 40, 50]); // + 0 [ [ 20, 30, 40, 50 ] ]
funcao10('+', 0, 20, 30, 40, 50); // + 0 [ 20, 30, 40, 50 ]

// Parâmentro com REST Operator( ...) (Sempre deve ser o ultimo parâmetro)
function funcao11(operador, acumulador, ...numeros) {
	for (const numero of numeros) {
		if (operador === '+') acumulador += numero;
		if (operador === '-') acumulador -= numero;
		if (operador === '/') acumulador /= numero;
		if (operador === '*') acumulador *= numero;
	}
	console.log(acumulador);
}
funcao11('+', 0, [20, 30, 40, 50]); // 020,30,40,50
funcao11('+', 0, 20, 30, 40, 50); // 140
funcao11('-', 0, 20, 30, 40, 50); // -140
funcao11('/', 1, 20, 30, 40, 50); // 8.333333333333334e-7
funcao11('*', 1, 20, 30, 40, 50); // 1200000
