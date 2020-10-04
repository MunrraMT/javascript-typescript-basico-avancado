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
class ValidarCPF {
	constructor(cpf) {
		this.cpf = this.onlyNumber(cpf);
		this.cpfFormatado = this.cpfFormatador(this.cpf);
		this.validade = this.isValid();
	}

	onlyNumber(cpf) {
		const cpfOnlyNumber = cpf.match(/\d/g).join('');
		return cpfOnlyNumber;
	}

	cpfFormatador(cpf) {
		const primeiraParte = cpf.slice(0, 3);
		const segundaParte = cpf.slice(3, 6);
		const terceiraParte = cpf.slice(6, 9);
		const digitos = cpf.slice(9, 11);

		return `${primeiraParte}.${segundaParte}.${terceiraParte}-${digitos}`;
	}

	isValid() {
		if (!this.cpf) return this.mensagemErro();
		if (typeof this.cpf !== 'string') return this.mensagemErro();
		if (this.cpf.length !== 11) return this.mensagemErro();
		if (this.cpf[0].repeat(11) === this.cpf) return this.mensagemErro();
		if (!this.comparacaoCPF()) return this.mensagemErro();

		return 'CPF Válido!';
	}

	mensagemErro() {
		return 'CPF Inválido!';
	}

	comparacaoCPF() {
		const cpfComDigito = `${this.cpf.slice(
			0,
			-2
		)}${this.digitoA()}${this.digitoB()}`;

		return cpfComDigito === this.cpf;
	}

	digitoA() {
		let multiplicador = 10;
		const cpfArray = this.cpf.slice(0, -2).split('');
		const cpfComDigitoA = cpfArray.reduce(function (
			acumulador,
			valorAtual
		) {
			acumulador += valorAtual * multiplicador;
			multiplicador--;
			return acumulador;
		},
		0);
		const calculoFinal = 11 - (cpfComDigitoA % 11);

		return calculoFinal > 9 ? 0 : calculoFinal;
	}

	digitoB() {
		let multiplicador = 11;
		const cpfArray = this.cpf.slice(0, -1).split('');
		const cpfComDigitoB = cpfArray.reduce(function (
			acumulador,
			valorAtual
		) {
			acumulador += valorAtual * multiplicador;
			multiplicador--;
			return acumulador;
		},
		0);
		const calculoFinal = 11 - (cpfComDigitoB % 11);

		return calculoFinal > 9 ? 0 : calculoFinal;
	}
}

const cpfA = new ValidarCPF('705.484.450-52');
console.log(cpfA); // ValidarCPF {cpf: "70548445052", cpfFormatado: "705.484.450-52", validade: "CPF Válido!"}
console.log(cpfA.cpf); // 70548445052
console.log(cpfA.cpfFormatado); // 705.484.450-52
console.log(cpfA.validade); // CPF Válido!

console.log('');

const cpfB = new ValidarCPF('070.987.720-03');
console.log(cpfB); // ValidarCPF {cpf: "07098772003", cpfFormatado: "070.987.720-03", validade: "CPF Válido!"}
console.log(cpfB.cpf); // 07098772003
console.log(cpfB.cpfFormatado); // 070.987.720-03
console.log(cpfB.validade); // CPF Válido!

console.log('');

const cpfC = new ValidarCPF('070.987.720-02');
console.log(cpfC); // ValidarCPF {cpf: "07098772002", cpfFormatado: "070.987.720-02", validade: "CPF Inválido!"}
console.log(cpfC.cpf); // 07098772002
console.log(cpfC.cpfFormatado); // 070.987.720-02
console.log(cpfC.validade); // CPF Inválido!

console.log('');

const cpfD = new ValidarCPF('111.111.111-11');
console.log(cpfD); // ValidarCPF {cpf: "11111111111", cpfFormatado: "111.111.111-11", validade: "CPF Inválido!"}
console.log(cpfD.cpf); // 11111111111
console.log(cpfD.cpfFormatado); // 111.111.111-11
console.log(cpfD.validade); // CPF Inválido!
