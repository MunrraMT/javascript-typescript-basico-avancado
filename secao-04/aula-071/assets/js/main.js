function criaCalculadora() {
	return {
		display: document.querySelector('.display'),

		inicia() {
			this.clickBotoes();
			this.pressionaEnter();
		},

		clickBotoes() {
			document.addEventListener(
				'click',
				function (event) {
					const elemento = event.target;

					if (elemento.classList.contains('btn-num')) {
						this.btnParaDisplay(elemento.innerText);
					}

					if (elemento.classList.contains('btn-clear')) {
						this.clearDisplay();
					}

					if (elemento.classList.contains('btn-del')) {
						this.apagaUm();
					}

					if (elemento.classList.contains('btn-eq')) {
						this.realizaConta();
					}
				}.bind(this)
			);
		},

		btnParaDisplay(valor) {
			this.display.value += valor;
		},

		clearDisplay() {
			this.display.value = '';
		},

		apagaUm() {
			this.display.value = this.display.value.slice(0, -1);
		},

		realizaConta() {
			let conta = this.display.value;

			try {
				conta = eval(conta);

				if (!conta) {
					alert('Conta Inválida');
				}

				this.display.value = String(conta);
			} catch (error) {
				alert('Conta Inválida');
				return;
			}
		},

		pressionaEnter() {
			document.addEventListener(
				'keypress',
				function (event) {
					if (event.code === 'Enter') {
						event.preventDefault();
						this.realizaConta();
						return;
					}
				}.bind(this)
			);
		},
	};
}
const calculadora = criaCalculadora();
calculadora.inicia();
