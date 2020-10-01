// Getters e Setters

// Symbol é um valor randomico que não pode ser acessado de fora da função
const _velocidade = Symbol('velocidade');
class Carro {
	constructor(nome) {
		this.nome = nome;
		this[_velocidade] = 0;
	}

	set velocidade(valor) {
		if (typeof valor !== 'number') return;
		if (valor >= 100 || valor <= 0) return;
		this[_velocidade] = valor;
	}

	get velocidade() {
		return this[_velocidade];
	}

	acelerar() {
		if (this[_velocidade] >= 100) return;
		this[_velocidade]++;
	}

	freiar() {
		if (this[_velocidade] <= 0) return;
		this[_velocidade]--;
	}
}

const c1 = new Carro('Fusca');
console.log(c1); // Carro {nome: "Fusca", Symbol(velocidade): 0}

for (let i = 0; i <= 200; i++) {
	c1.acelerar();
}

console.log(c1); // Carro {nome: "Fusca", Symbol(velocidade): 100}
console.log(c1.velocidade); // 100

c1.velocidade = 55;
console.log(c1.velocidade); // 55

console.log('');

class PessoaA {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	get nomeCompleto() {
		return `${this.nome} ${this.sobrenome}`;
	}

	set nomeCompleto(valor) {
		console.log(valor); // "Luiz Otávio Miranda"
		valor = valor.split(' ');
		console.log(valor); // ["Luiz", "Otávio", "Miranda"]
		this.nome = valor.shift();
		console.log(this.nome); // "Luiz"
		this.sobrenome = valor.join(' ');
		console.log(this.sobrenome); // "Otávio Miranda"
	}
}

const pA1 = new PessoaA('André', 'Rodrigues');
console.log(pA1); // PessoaA {nome: "André", sobrenome: "Rodrigues"}
console.log(pA1.nomeCompleto); // "André Rodrigues"
pA1.nomeCompleto = 'Luiz Otávio Miranda';
console.log(pA1.nomeCompleto); // "Luiz Otávio Miranda"
