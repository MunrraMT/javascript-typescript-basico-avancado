// Factory Functions + Prototypes

// METODO COM HERANÇA E ACOPLAMENTO
function criaPessoaA(nome, sobrenome) {
	const pessoaPrototypeA = {
		falar() {
			console.log(`${this.nome} está falando!`);
		},
		comer() {
			console.log(`${this.nome} está comendo!`);
		},
		beber() {
			console.log(`${this.nome} está bebendo!`);
		},
	};

	return Object.create(pessoaPrototypeA, {
		nome: { value: nome },
		sobrenome: { value: sobrenome },
	});
}

const pA1 = criaPessoaA('Luiz', 'Otávio');
console.log(pA1);
pA1.falar();
pA1.comer();
pA1.beber();

const pA2 = criaPessoaA('André', 'Rodrigues');
console.log(pA2);
pA2.falar();
pA2.comer();
pA2.beber();

console.log('');

// METODO DE COMPOSIÇÃO OU MIXING
// METODO SEM HERANÇA E ACOPLAMENTO
function criaPessoa2(nome, sobrenome) {
	return Object.create(pessoaPrototypeB, {
		nome: { value: nome },
		sobrenome: { value: sobrenome },
	});
}

const falar = {
	falar() {
		console.log(`${this.nome} está falando!`);
	},
};
const comer = {
	comer() {
		console.log(`${this.nome} está comendo!`);
	},
};
const beber = {
	beber() {
		console.log(`${this.nome} está bebendo!`);
	},
};

const pessoaPrototypeB = Object.assign({}, falar, comer, beber);

const pB1 = criaPessoa2('Luiz', 'Otávio');
console.log(pB1);
pB1.falar();
pB1.comer();
pB1.beber();

const pB2 = criaPessoa2('André', 'Rodrigues');
console.log(pB2);
pB2.falar();
pB2.comer();
pB2.beber();
