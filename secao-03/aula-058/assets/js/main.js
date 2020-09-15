// Tratando e lançando erros (try, catch, throw)

try {
	console.log(naoExisto);
} catch (error) {
	const naoExisto = 'Variável';
	console.log(naoExisto);
}

function soma(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'x e y precisam ser números';
	}
	return x + y;
}
try {
	console.log(soma(1, 2));
	console.log(soma('1', 2));
} catch (error) {
	console.log(error);
}

function soma2(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new Error('x e y precisam ser números');
	}
	return x + y;
}
try {
	console.log(soma2(1, 2));
	console.log(soma2('1', 2));
} catch (error) {
	// console.log(error);
	console.log('Alguma coisa mais amigável para o usuário');
}
