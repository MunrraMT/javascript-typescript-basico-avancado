// CRIANDO CORRENTE DE HERANÇAS DE PROTOTYPES
const objA = {
	chaveA: 'A',
	// __proto__: Object.prototype
};

const objB = {
	chaveB: 'B',
	// __proto__: objA
};

// FAZ COM QUE O OBJB RECEBA COMO PROTOTYPE O OBJA
Object.setPrototypeOf(objB, objA);
console.dir(objB);
/*
chaveB: "B"​
<prototype>: Object { chaveA: "A" }
*/
console.log(objB.chaveA); // A

// EXEMPLO COM FUNÇÃO CONSTRUTORA E PROTOTYPE
function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}

Produto.prototype.desconto = function (percentualDeDesconto) {
	this.preco = (this.preco * (100 - percentualDeDesconto)) / 100;
};

Produto.prototype.aumento = function (percentualDeAumento) {
	this.preco = (this.preco * (100 + percentualDeAumento)) / 100;
};

let p1 = new Produto('camiseta', 50);
console.dir(p1); // Produto { nome: 'camiseta', preco: 50 }
console.log(p1); // Produto { nome: 'camiseta', preco: 50 }

p1.desconto(50); // 50 - 25
console.log(p1); // Produto { nome: 'camiseta', preco: 25 }

p1.desconto(100); // 25 - 25
console.log(p1); // Produto { nome: 'camiseta', preco: 0 }

p1 = new Produto('camiseta', 50);
p1.aumento(50); // 50 + 25
console.log(p1); // Produto { nome: 'camiseta', preco: 75 }

p1.aumento(100); // 75 + 75
console.log(p1); // Produto { nome: 'camiseta', preco: 150 }

// COLOCANDO UM PROTOTYPE DE UMA FUNÇÃO CONSTRUTORA EM UMA FUNÇÃO LITERAL
// OBJETO LITERAL
const p2 = { nome: 'caneta', preco: 1.5 };
console.log(p2); // { nome: 'caneta', preco: 1.5 }

// COLOCA O Produto.prototype COMO PROTOTYPE DO p2
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(50);
console.log(p2); // Produto { nome: 'caneta', preco: 2.25 }

// CRIA UM OBJETO JÁ COM UM PROTOTYPE ESTABELECIDO
// CRIANDO OBJETO COM Obect.create(QUAL O PROTOTYPE QUER USAR COMO BASE)
const p3 = Object.create(Produto.prototype);
console.log(p3); // Produto {}
p3.nome = 'mochila';
p3.preco = 150;
console.log(p3); // Produto { nome: 'mochila', preco: 150 }
p3.aumento(50); // 150 + 75
console.log(p3); // Produto { nome: 'mochila', preco: 225 }

// CRIANDO COM Obect.create() E PASSANDO AS PROPRIEDADES POR PARÂMETRO
const p4 = Object.create(Produto.prototype, {
	nome: {
		writable: true,
		configurable: true,
		enumerable: true,
		value: 'tênis',
	},
	preco: {
		writable: true,
		configurable: true,
		enumerable: true,
		value: 220,
	},
});
console.log(p4); // Produto { nome: 'tênis', preco: 220 }
p3.aumento(50); // 150 + 75
console.log(p3); // Produto { nome: 'mochila', preco: 337.5 }
