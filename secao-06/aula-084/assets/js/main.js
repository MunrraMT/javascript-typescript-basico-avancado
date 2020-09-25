// FACTORY FUNCTIONS / CONSTRUCTOR FUNCTIONS

// EXEMPLO DE FACTORY FUNCTIONS
function criaPessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get nomecompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},
	};
}
const p1 = criaPessoa('André', 'Rodrigues');
console.log(p1.nomecompleto); // André Rodrigues

// EXEMPLO DE CONSTRUCTOR FUNCITION
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.nomecompleto = function () {
		return `${this.nome} ${this.sobrenome}`;
	};
}
const p2 = new Pessoa('André', 'Rodrigues');
console.log(p2.nomecompleto()); // André Rodrigues

// TRAVANDO TOTALMENTE UM OBJETO DE UMA VARIÁVEL

// TRAVANDO COM Object.freeze(this)
function Pessoa2(nome) {
	this.nome = nome;

	Object.freeze(this); // Trava o objeto para modificações
}
const p3 = new Pessoa2('André');
p3.nome = 'Camila';
console.log(p3.nome); // André

// SEM TRAVAR COM Object.freeze(this)
function Pessoa3(nome) {
	this.nome = nome;
}
const p4 = new Pessoa3('André');
p4.nome = 'Camila';
console.log(p4.nome); // Camila
