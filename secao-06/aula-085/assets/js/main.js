// Object.defineProperty()

function Produto1(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	// Parâmentros: Objeto, Propriedade e Configuração
	Object.defineProperty(this, 'estoque', {
		// Mostrar propriedade públicamente(true).
		enumerable: true,
		// Define origem do valor, nesse caso, parâmentro.
		value: estoque,
		// Bloqueia propriedade para alteração do valor(false).
		writable: false,
		// Possibilidade de deletar e re-configurar.
		configurable: false,
	});
}
const p1 = new Produto1('Camiseta', 20, 3);
console.log(p1); // Produto1 { nome: 'Camiseta', preco: 20, estoque: 3 }

p1.nome = 'sapato';
p1.estoque = 5;
console.log(p1); // Produto1 { nome: 'sapato', preco: 20, estoque: 3 }

console.log(Object.keys(p1)); // [ 'nome', 'preco', 'estoque' ]

// Uso de função na Propriedade value
function Produto2(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		value: function () {
			return estoque + 10;
		},
		writable: false,
		configurable: false,
	});
}
const p2 = new Produto2('Camiseta', 20, 3);
console.log(p2.estoque); // [Function: value]
console.log(p2.estoque()); // 13

// Object.defineProperties()
// Definindo todas as propriedade de um objeto como travadas

function Produto3(nome, preco, estoque) {
	// Codificação simelhante a JSON
	Object.defineProperties(this, {
		nome: {
			enumerable: true,
			value: nome,
			writable: false,
			configurable: false,
		},
		preco: {
			enumerable: true,
			// Usando Template String na propriedade Value
			value: `R$ ${preco}`,
			writable: false,
			configurable: false,
		},
		estoque: {
			enumerable: true,
			value: estoque,
			writable: false,
			configurable: false,
		},
	});
}
const p3 = new Produto3('Camiseta', 20, 3);
console.log(p3); // Produto3 { nome: 'Camiseta', preco: 'R$ 20', estoque: 3 }

p3.nome = 'sapato';
p3.estoque = 5;
console.log(p3); // Produto3 { nome: 'Camiseta', preco: 'R$ 20', estoque: 3 }

console.log(Object.keys(p3)); // [ 'nome', 'preco', 'estoque' ]
