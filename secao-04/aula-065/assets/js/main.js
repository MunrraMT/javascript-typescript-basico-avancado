// Retorno de Funções (return)
// Retorna um valor
// Termina a função

function soma(a, b) {
	return a + b;
}

function soma2(a, b) {
	console.log(a + b);
}
soma2(5, 2); // 7

function falaFrase(comeco) {
	function falaResto(resto) {
		return comeco + ' ' + resto;
	}
	return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!')); // Olá mundo!

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto); // Olá mundo!

function duplica(n) {
	return n * 2;
}

function triplica(n) {
	return n * 3;
}

function quadriplica(n) {
	return n * 4;
}

console.log(duplica(2)); // 4
console.log(triplica(2)); // 6
console.log(quadriplica(2)); //8

function criaMultiplicador(multriplicador) {
	return function (n) {
		return n * multriplicador;
	};
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2)); // 4
console.log(triplica2(2)); // 6
console.log(quadriplica2(2)); //8
