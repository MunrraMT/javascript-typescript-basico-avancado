// Herança

// Produto -> aumento, desconto
// Camiseta =  Cor, caneca = material
function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
	this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
	this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
	// Herdando propriedades de Produto
	Produto.call(this, nome, preco);
	// Novas propriedades de Camiseta
	this.cor = cor;
}
// Torna Produto como prototype de Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
// Coloca como Construtor o prototype da Camiseta
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(camiseta); // Camiseta { nome: 'Regata', preco: 7.5, cor: 'Preta' }
camiseta.aumento(10);
console.log(camiseta); // Camiseta { nome: 'Regata', preco: 17.5, cor: 'Preta' }

const produto = new Produto('Gen', 111);
console.log(produto); // Produto { nome: 'Gen', preco: 111 }

function Caneca(nome, preco, material, estoque) {
	Produto.call(this, nome, preco);
	this.material = material;

	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		configurable: false,
		get: function () {
			return estoque;
		},
		set: function (valor) {
			if (typeof valor !== 'number') return console.log('Valor inválido');
			estoque = valor;
		},
	});
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 1.5, 'Plástico', 5);
caneca.estoque = '100'; // Valor inválido
console.log(caneca);
/*
Caneca {
    nome: 'Caneca',
    preco: 1.5,
    material: 'Plástico',
    estoque: [Getter/Setter]
}
*/

caneca.aumento(20);
console.log(caneca); // Caneca { nome: 'Caneca', preco: 21.5, material: 'porcelana' }
/*
Caneca {
    nome: 'Caneca',
    preco: 21.5,
    material: 'Plástico',
    estoque: [Getter/Setter]
}
*/
