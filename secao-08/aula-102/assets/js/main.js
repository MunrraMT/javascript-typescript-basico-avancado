// Promises

function aleatorio(minimo, maximo) {
	minimo *= 1000;
	maximo *= 1000;
	return Math.round(Math.random() * (maximo - minimo) + minimo);
}

function esperaAi(mensagem, tempo) {
	return new Promise((resolve, reject) => {
		if (typeof mensagem !== 'string')
			reject(new TypeError('Mensagem precisa ser uma string'));
		setTimeout(() => {
			resolve(mensagem);
		}, tempo);
	});
}

esperaAi('Conectando com o BD...', aleatorio(1, 3))
	.then((resposta) => {
		console.log(resposta);
		return esperaAi('Buscando os dados da BASE...', aleatorio(1, 3));
	})
	.then((resposta) => {
		console.log(resposta);
		return esperaAi('Tratando os dados da  BASE...', aleatorio(1, 3));
	})
	.then((resposta) => {
		console.log(resposta);
	})
	.then(() => console.log('Exibe os dados tratados na tela!'))
	.catch((e) => console.log('Erro:', e));
/*
Conectando com o BD...
Buscando os dados da BASE...
Tratando os dados da  BASE...
Exibe os dados tratados na tela!
*/

esperaAi('Conectando com o BD...', aleatorio(1, 3))
	.then((resposta) => {
		console.log(resposta);
		return esperaAi('Buscando os dados da BASE...', aleatorio(1, 3));
	})
	.then((resposta) => {
		console.log(resposta);
		// ERROR DE TIPO DE DADO
		return esperaAi(222222, aleatorio(1, 3));
	})
	.then((resposta) => {
		console.log(resposta);
	})
	.then(() => console.log('Exibe os dados tratados na tela!'))
	.catch((e) => console.log(e));
/*
Conectando com o BD...
Buscando os dados da BASE...
TypeError: Precisa ser uma string
    at e:\Cursos\Desenvolvedor Front End\ESTUDOS\javascript-typescript-basico-avancado\secao-08\aula-102\assets\js\main.js:12:11
    at new Promise (<anonymous>)
    at esperaAi (e:\Cursos\Desenvolvedor Front End\ESTUDOS\javascript-typescript-basico-avancado\secao-08\aula-102\assets\js\main.js:10:9)
    at e:\Cursos\Desenvolvedor Front End\ESTUDOS\javascript-typescript-basico-avancado\secao-08\aula-102\assets\js\main.js:48:10
*/
