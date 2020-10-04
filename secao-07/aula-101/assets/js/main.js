class ValidaFormulario {
	constructor() {
		this.formulario = document.querySelector('.formulario');

		this.eventos();
	}

	eventos() {
		this.formulario.addEventListener('submit', (event) => {
			this.handleSubmit(event);
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const camposValidos = this.camposSaoValidos();
		const senhasValidas = this.senhasSaoValidas();

		if (camposValidos && senhasValidas) {
			alert('Formulário enviado.');
			this.formulario.submit();
		}
	}

	senhasSaoValidas() {
		let valid = true;

		const senha = this.formulario.querySelector('.senha');
		const repetirSenha = this.formulario.querySelector('.repetir-senha');

		if (senha.value !== repetirSenha.value) {
			valid = false;
			this.criaError(
				senha,
				'Campos senha e repetir senha, precisam ser iguais'
			);
			this.criaError(
				repetirSenha,
				'Campos senha e repetir senha, precisam ser iguais'
			);
		}

		if (senha.value.length < 6 || senha.value.length > 12) {
			valid = false;
			this.criaError(
				senha,
				'Senha precisa estar entre 6 e 12 caracteres'
			);
		}

		return valid;
	}

	camposSaoValidos() {
		let valid = true;

		for (const errorText of this.formulario.querySelectorAll(
			'.error-text'
		)) {
			errorText.remove();
		}

		for (const campo of this.formulario.querySelectorAll('.validar')) {
			const label = campo.previousElementSibling.innerText;
			if (!campo.value) {
				this.criaError(
					campo,
					`Campo "${label}" não pode estar em branco.`
				);
				valid = false;
			}

			if (campo.classList.contains('cpf')) {
				if (!this.validaCPF(campo)) valid = false;
			}

			if (campo.classList.contains('usuario')) {
				if (!this.validaUsuario(campo)) valid = false;
			}
		}

		return valid;
	}

	validaUsuario(campo) {
		const usuario = campo.value;
		let valid = true;

		if (usuario.length > 12 || usuario.length < 3) {
			this.criaError(
				campo,
				'Usuário precisa ter entre 3 e 12 caracteres'
			);
			valid = false;
		}

		if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
			this.criaError(
				campo,
				'Nome de usuário precisa conter letras e/ou números'
			);
			valid = false;
		}

		return true;
	}

	validaCPF(campo) {
		const cpf = new ValidaCPF(campo.value);

		if (!cpf.valida()) {
			this.criaError(campo, 'CPF  Inválido!');
			return false;
		}
		return true;
	}

	criaError(campo, mensagem) {
		const div = document.createElement('div');
		div.innerText = mensagem;
		div.classList.add('error-text');
		campo.insertAdjacentElement('afterend', div);
	}
}

const valida = new ValidaFormulario();
