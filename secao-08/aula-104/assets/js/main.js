// Async / Await
// ESTADOS: PENDENTE { <pending> }
// ESTADOS: RESOLVIDA { <fullfilled> }
// ESTADOS: REJEITADA { <rejected> }

function numeroAleatorio(minimo = 0, maximo = 3) {
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

executa();

async function executa() {
	try {
		const fase1 = await esperaAi('Fase 01', numeroAleatorio());
		console.log(fase1);

		const fase2 = await esperaAi('Fase 02', numeroAleatorio());
		console.log(fase2);

		const fase3 = await esperaAi('Fase 03', numeroAleatorio());
		console.log(fase3);

		console.log('Terminamos na fase:', fase3);
	} catch (error) {
		console.log(error);
	}
}
/*
FASE 01 - Passei na promise.
FASE 02 - Passei na promise.
FASE 03 - Passei na promise.
Terminamos na fase: FASE 03 - Passei na promise.
*/
