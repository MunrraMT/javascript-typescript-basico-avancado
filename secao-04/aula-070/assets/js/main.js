// Funções fábrica (Factory Functions), THIS, Getter e Setter

function criaPessoa1(nome, sobrenome) {
	return { nome, sobrenome };
}
const meuNome = criaPessoa1('André', 'Rodrigues');
console.log(meuNome); // { nome: 'André', sobrenome: 'Rodrigues' }

function criaPessoa2(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		fala: function (assunto) {
			return `${this.nome} está ${assunto}`;
		},
	};
}
const meuNome2 = criaPessoa2('André', 'Rodrigues');
const meuNome3 = criaPessoa2('Camila', 'Maria');
console.log(meuNome2); // { nome: 'André', sobrenome: 'Rodrigues', fala: [Function: fala] }
console.log(meuNome2.fala('falando sobre js')); // André está falando sobre js
console.log(meuNome3.fala('falando sobre js')); // Camila está falando sobre js

function criaPessoa4(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		fala(assunto) {
			return `${this.peso} está ${assunto}`;
		},
		peso: 80,
	};
}
const meuNome4 = criaPessoa4('André', 'Rodrigues');
console.log(meuNome4.fala('teste')); // 80 está teste
console.log(meuNome4.peso); // 80

function criaPessoa5(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,
		altura,
		peso,
		fala(assunto) {
			return `${this.peso} está ${assunto}`;
		},
		imc() {
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}
const meuNome5 = criaPessoa5('André', 'Rodrigues', 1.73, 98);
const meuNome6 = criaPessoa5('Camila', 'Maria', 1.6, 86);
console.log(meuNome5.imc()); // 32.74
console.log(meuNome6.imc()); // 33.59

// Função com Getter
function criaPessoa7(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,
		altura,
		peso,
		fala(assunto) {
			return `${this.peso} está ${assunto}`;
		},
		// Getter
		get imc() {
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}
const meuNome7 = criaPessoa7('André', 'Rodrigues', 1.73, 98);
console.log(meuNome7.nome); // André
console.log(meuNome7.sobrenome); // Rodrigues
console.log(meuNome7.imc); // 32.74

// Função com Setter
function criaPessoa8(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,
		altura,
		peso,

		// Getter
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},

		//Setter
		set nomeCompleto(valor) {
			valor = valor.split(' ');
			this.nome = valor.shift();
			this.sobrenome = valor.join(' ');
		},
	};
}
const meuNome8 = criaPessoa8('André', 'Rodrigues', 1.73, 98);
meuNome8.nomeCompleto = 'Camila Maria Belizário';
console.log(meuNome8.nome); // Camila
console.log(meuNome8.sobrenome); // Maria Belizário
console.log(meuNome8.nomeCompleto); // Camila Maria Belizário
