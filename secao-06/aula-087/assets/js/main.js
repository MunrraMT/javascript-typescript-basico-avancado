// Object.defineProperty() com GETTER E SETTER

// Construct Function
function Produto1(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		configurable: false,
		// O GETTER substitui o uso do value
		get: function () {
			return `Valor atual é ${estoque}`;
		},
		// O SETTER substitui o uso do writable
		set: function (valor) {
			if (typeof valor !== 'number') {
				throw new TypeError('Valor Inválido');
			}
			estoque = valor;
		},
	});
}
const p1 = new Produto1('Camiseta', 20, 3);
console.log(p1); // Produto1 { nome: 'Camiseta', preco: 20, estoque: [Getter/Setter] }
p1.estoque = 'Teste estoque';
console.log(p1.estoque); // Valor inválido! // Valor atual é 3
p1.estoque = 10;
console.log(p1.estoque); // Valor atual é 10

// Factory Function
function criaProduto(nome) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			if (typeof valor !== 'string') throw new TypeError('Nome Inválido');
			nome = valor;
		},
	};
}
const p2 = criaProduto('Tênis');
console.log(p2);
console.log(p2.nome); // Tênis
p2.nome = 'Sapato';
console.log(p2.nome); // Sapato
p2.nome = 25;
console.log(p2.nome); // Nome inválido! // Sapato
