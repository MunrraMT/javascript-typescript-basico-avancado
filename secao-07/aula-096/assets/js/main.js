// Criando classes

class PessoaA {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	falar() {
		console.log(`${this.nome} está falando`);
	}
}

const pA1 = new PessoaA('Luiz', 'Miranda');
const pA2 = new PessoaA('André', 'Rodrigues');
console.log(pA1); // PessoaA {nome: "Luiz", sobrenome: "Miranda"}
console.log(pA2); // PessoaA {nome: "André", sobrenome: "Rodrigues"}
pA1.falar(); // Luiz está falando
pA2.falar(); // André está falando

console.log('');

function PessoaB(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

PessoaB.prototype.falar = function () {
	console.log(`${this.nome} está falando`);
};

const pB1 = new PessoaB('Luiz', 'Miranda');
const pB2 = new PessoaB('André', 'Rodrigues');
console.log(pB1); // PessoaB {nome: "Luiz", sobrenome: "Miranda"}
console.log(pB2); // PessoaB {nome: "André", sobrenome: "Rodrigues"}
pB1.falar(); // Luiz está falando
pB2.falar(); // André está falando
