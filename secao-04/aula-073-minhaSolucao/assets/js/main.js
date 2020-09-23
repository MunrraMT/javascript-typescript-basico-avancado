function CriaCalculadora() {
	const display = document.querySelector('.display');

	inicia();

	function inicia() {
		clickBotoes();
		pressionaEnter();
	}

	function clickBotoes() {
		document.addEventListener(
			'click',
			function (event) {
				const elemento = event.target;

				if (elemento.classList.contains('btn-num')) {
					btnParaDisplay(elemento.innerText);
				}

				if (elemento.classList.contains('btn-clear')) {
					clearDisplay();
				}

				if (elemento.classList.contains('btn-del')) {
					apagaUm();
				}

				if (elemento.classList.contains('btn-eq')) {
					realizaConta();
				}
			}.bind(this)
		);
	}

	function btnParaDisplay(valor) {
		display.value += valor;
	}

	function clearDisplay() {
		display.value = '';
	}

	function apagaUm() {
		display.value = display.value.slice(0, -1);
	}

	function realizaConta() {
		let conta = display.value;

		try {
			conta = eval(conta);

			if (!conta) {
				alert('Conta Inválida');
			}

			display.value = String(conta);
		} catch (error) {
			alert('Conta Inválida');
			return;
		}
	}

	function pressionaEnter() {
		document.addEventListener(
			'keypress',
			function (event) {
				if (event.code === 'Enter') {
					event.preventDefault();
					realizaConta();
					return;
				}
			}.bind(this)
		);
	}
}
const calculadora = new CriaCalculadora();
