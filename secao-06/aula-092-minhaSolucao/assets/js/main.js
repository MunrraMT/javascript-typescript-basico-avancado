// 705.484.450-52 070.987.720-03

// 7X 0X 5X 4X 8X 4X 4X 5X 0X
// 10 9  8  7  6  5  4  3  2
// 70 0  40 28 48 20 16 15 0 = 237

// Se o dígito for >9 será ZERO
// 11 - (237 % 11) = 5 (Primeiro dígito)

// 7X 0X 5X 4X 8X 4X 4X 5X 0X 5x
// 11 10 9  8  7  6  5  4  3  2
// 77 0  45 32 56 24 20 20 0  10 = 284

// Se o dígito for >9 será ZERO
// 11 - (284 % 11) = 2 (Segundo dígito)

// MINHA SOLUÇÃO
function cpfValidator() {
	const containerHTML = document.querySelector('#container');
	const articleHTML = document.createElement('article');
	const titleHTML = document.createElement('h3');
	const formHTML = document.createElement('form');
	const labelHTML = document.createElement('label');
	const pHTML = document.createElement('p');
	const inputHTML = document.createElement('input');
	const btnForm = document.createElement('button');
	const resultDIV = document.createElement('div');
	const resultMsg = document.createElement('p');

	let cpfOriginal;

	titleHTML.innerText = 'Validador de CPF';
	pHTML.innerText = 'Insira o seu CPF';
	btnForm.innerText = 'Verificar';

	containerHTML.appendChild(articleHTML);
	articleHTML.appendChild(titleHTML);
	labelHTML.appendChild(pHTML);
	labelHTML.appendChild(inputHTML);
	formHTML.appendChild(labelHTML);
	formHTML.appendChild(btnForm);
	articleHTML.appendChild(formHTML);
	articleHTML.appendChild(resultDIV);
	resultDIV.appendChild(resultMsg);

	addAtrittube();
	addStyle();
	cpfSubmit();

	function addAtrittube() {
		labelHTML.setAttribute('for', 'cpfSubmit');
		inputHTML.setAttribute('type', 'text');
		inputHTML.setAttribute('name', 'cpfSubmit');
		btnForm.setAttribute('type', 'submit');
	}

	function addStyle() {
		titleHTML.style.textAlign = 'center';
		articleHTML.style.marginTop = '3rem';
		articleHTML.style.border = 'solid 2px black';
		articleHTML.style.padding = '1rem';
		labelHTML.style.display = 'flex';
		labelHTML.style.alignItems = 'center';
		pHTML.style.marginRight = '1rem';
		resultMsg.style.color = 'white';
		resultMsg.style.padding = '0.5rem';
		resultMsg.style.fontSize = '1rem';
		resultMsg.style.textAlign = 'center';
	}

	function cpfSubmit() {
		formHTML.addEventListener('submit', function (e) {
			e.preventDefault();
			cpfOriginal = onlyNumber(inputHTML.value);
			isValid(comparator(cpfOriginal));
			inputHTML.value = organizarCPF(cpfOriginal);
		});
	}

	function onlyNumber(valor) {
		valor = valor.match(/\d/g);
		let cpf = valor.map(function (element) {
			return Number(element);
		});
		return cpf.slice(0, 11);
	}

	function calcDigitA(cpf) {
		let multiplicador = 10;
		const cpfSemDigito = cpf.slice(0, 9);
		const cpfMultiplicado = cpfSemDigito.reduce((acumulador, valor) => {
			acumulador += valor * multiplicador;
			multiplicador--;
			return acumulador;
		}, 0);
		const cpfPrimeiroDigito = () => 11 - (cpfMultiplicado % 11);
		return cpfPrimeiroDigito();
	}

	function calcDigitB(cpf) {
		let multiplicador = 11;
		const cpfComUmDigito = cpf.slice(0, 10);
		const cpfMultiplicado = cpfComUmDigito.reduce((acumulador, valor) => {
			acumulador += valor * multiplicador;
			multiplicador--;
			return acumulador;
		}, 0);
		const cpfSegundoDigito = () => 11 - (cpfMultiplicado % 11);
		return cpfSegundoDigito();
	}

	function comparator(cpf) {
		const firstDigit = calcDigitA(cpf);
		const lastDigit = calcDigitB(cpf);
		const digitis = `${firstDigit}${lastDigit}`;

		return cpfOriginal.slice(-2).join('') === digitis;
	}

	function isValid(result) {
		if (result) {
			resultMsg.innerText = 'CPF Válido!';
			resultMsg.style.backgroundColor = 'green';
		} else {
			resultMsg.innerText = 'CPF Inválido!';
			resultMsg.style.backgroundColor = 'red';
		}
	}

	function organizarCPF(cpfInput) {
		const primeiraParte = cpfInput.join('').slice(0, 3);
		const segundaParte = cpfInput.join('').slice(3, 6);
		const terceiraParte = cpfInput.join('').slice(6, 9);
		const quartaParte = cpfInput.join('').slice(9, 11);
		const cpfFormated = `${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`;
		return cpfFormated;
	}
}
cpfValidator();
