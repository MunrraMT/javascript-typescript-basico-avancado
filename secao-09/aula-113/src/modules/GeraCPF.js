import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
	rand(min = 100000000, max = 999999999) {
		return String(Math.floor(Math.random() * (max - min) + min));
	}

	geraNovoCpf() {
		const cpfSemDigitio = this.rand();
		const digito1 = ValidaCPF.geraDigito(cpfSemDigitio);
		const digito2 = ValidaCPF.geraDigito(cpfSemDigitio + digito1);
		const novoCpf = cpfSemDigitio + digito1 + digito2;
		return novoCpf;
	}

	formatado(cpf) {
		const primeiraParte = cpf.slice(0, 3);
		const segundaParte = cpf.slice(3, 6);
		const terceiraParte = cpf.slice(6, 9);
		const digitos = cpf.slice(9, 11);

		return `${primeiraParte}.${segundaParte}.${terceiraParte}-${digitos}`;
	}
}
