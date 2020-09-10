// MINHA SOLUÇÃO
function exercicioCalculadoraIMC() {
	const form = document.querySelector('#form');
	const resultado = document.querySelector('#resultado');
	const errado = document.querySelector('#errado');

	form.addEventListener('submit', calculadoIMC);
	function calculadoIMC() {
		event.preventDefault();

		resultado.innerHTML = '';
		errado.innerHTML = '';

		const peso = Number(document.querySelector('#peso').value);
		const altura = Number(document.querySelector('#altura').value);
		let imc = peso / (altura * altura);
		imc = imc.toFixed(1);

		console.log(peso, altura);
		console.log(imc);

		if (valorCorreto(peso, altura)) {
			resultadoIMC(imc);
		}

		function valorCorreto(peso, altura) {
			if (pesoCorreto(peso) && alturaCorreto(altura)) {
				return true;
			}
		}

		function pesoCorreto(peso) {
			if (peso >= 0 && peso <= 500) {
				return true;
			} else {
				errado.innerHTML = `<p>Peso inválido</p>`;
			}
		}

		function alturaCorreto(altura) {
			if (altura > 0 && altura < 3) {
				return true;
			} else {
				errado.innerHTML = `<p>Altura inválida</p>`;
			}
		}

		function resultadoIMC(imc) {
			if (imc < 18.5) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
			} else if (imc >= 18.5 && imc <= 24.9) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
			} else if (imc >= 25 && imc <= 29.9) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
			} else if (imc >= 30 && imc <= 34.9) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
			} else if (imc >= 35 && imc <= 39.9) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
			} else if (imc >= 40) {
				resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
			}
		}
	}
}
exercicioCalculadoraIMC();
