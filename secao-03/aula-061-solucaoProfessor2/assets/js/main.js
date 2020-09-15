meuTimer();
function meuTimer() {
	const relogio = document.querySelector('#relogio');
	let segundos = 0;
	let timer;

	function iniciarRelogio() {
		timer = setInterval(function () {
			segundos++;
			relogio.innerHTML = criaHoraDosSegundos(segundos);
		}, 1000);
	}

	function criaHoraDosSegundos(segundos) {
		const data = new Date(segundos * 1000);
		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'utc',
		});
	}

	document.addEventListener('click', function (event) {
		const elemento = event.target;

		if (elemento === document.querySelector('#iniciar')) {
			relogio.classList.remove('pausado');
			clearInterval(timer);
			iniciarRelogio();
		}

		if (elemento === document.querySelector('#pausar')) {
			relogio.classList.add('pausado');
			clearInterval(timer);
		}

		if (elemento === document.querySelector('#zerar')) {
			clearInterval(timer);
			segundos = 0;
			relogio.innerHTML = '00:00:00';
		}
	});
}
