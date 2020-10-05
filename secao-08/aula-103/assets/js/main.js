// Métodos úteis para Promises
// Promise.all, Promise.race, Promise.resolve, Promise.reject

function aleatorio(minimo, maximo) {
	minimo *= 1000;
	maximo *= 1000;
	return Math.round(Math.random() * (maximo - minimo) + minimo);
}

function esperaAi(mensagem, tempo) {
	return new Promise((resolve, reject) => {
		if (typeof mensagem !== 'string') {
			return reject(new TypeError('Mensagem precisa ser uma string'));
		}

		setTimeout(() => {
			resolve(mensagem.toUpperCase() + ' - Passei na promise.');
		}, tempo);
	});
}

// Promise.all => Retorna um ARRAY com os valores
let promises = [
	'Primeiro valor',
	esperaAi('Promise 01', 3000),
	esperaAi('Promise 02', 500),
	esperaAi('Promise 03', 2000),
	esperaAi('Promise 04', 1000),
	'Outro valor',
];

Promise.all(promises)
	.then(function (valor) {
		console.log(valor);
	})
	.catch(function (erro) {
		console.log(erro);
	});
/*
[
	'Primeiro valor',
	'PROMISE 01 - Passei na promise',
	'PROMISE 02 - Passei na promise',
	'PROMISE 03 - Passei na promise',
	'PROMISE 04 - Passei na promise',
	'Outro valor'
]
*/

// Promise.race => Retorna o primeiro valor a ser resolvido
promises = [
	esperaAi('Promise 01', aleatorio(1, 5)),
	esperaAi('Promise 02', aleatorio(1, 5)),
	esperaAi('Promise 03', aleatorio(1, 5)),
];

Promise.race(promises)
	.then(function (valor) {
		console.log(valor);
	})
	.catch(function (erro) {
		console.log(erro);
	});

// Promise.resolve => Retorna como promessa resolvida.
function baixaPagina(valor) {
	const emCache = valor;

	if (emCache) {
		return Promise.resolve('Página em CACHE!');
	}

	return esperaAi('Baixei a página!', 3000);
}

baixaPagina(true)
	.then((valor) => console.log(valor))
	.catch((error) => console.log(error));
// Página em CACHE!

baixaPagina(false)
	.then((valor) => console.log(valor))
	.catch((error) => console.log(error));
// BAIXEI A PÁGINA! - Passei na promise.
