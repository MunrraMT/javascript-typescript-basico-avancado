// Herança com classes

class DispositivoEletronicoA {
	constructor(nome) {
		this.nome = nome;
		this.ligado = false;
	}

	ligar() {
		if (this.ligado) {
			console.log(`${this.nome} já está ligado`);
			return;
		}

		console.log(`${this.nome} agora está ligado`);
		this.ligado = true;
	}

	desligar() {
		if (!this.ligado) {
			console.log(`${this.nome} já está desligado`);
			return;
		}

		console.log(`${this.nome} agora está desligado`);
		this.ligado = false;
	}
}

const dA1 = new DispositivoEletronicoA('Smartphone');
console.log(dA1); // DispositivoEletronicoA { nome: 'Smartphone', ligado: false }
dA1.ligar(); // Smartphone agora está ligado
dA1.ligar(); // Smartphone já está ligado
console.log(dA1); // DispositivoEletronicoA { nome: 'Smartphone', ligado: true }
dA1.desligar(); // Smartphone agora está desligado
dA1.desligar(); // Smartphone já está desligado
console.log(dA1); // DispositivoEletronicoA { nome: 'Smartphone', ligado: false }

console.log('');

// extends => Forma de fazer herança com classes
class SmartphoneA extends DispositivoEletronicoA {
	constructor(nome, modelo, cor) {
		// Ao fazer um novo construtor, precisa chamar o construtor da Super Classe de origem, através do super(), passando os parêmetros do construtor pai como argumento.
		super(nome);

		this.modelo = modelo;
		this.cor = cor;
	}
}

const sA1 = new SmartphoneA('Samsung', 'Galaxy S10', 'Preto');
console.log(sA1); // SmartphoneA {nome: "Samsung", ligado: false, modelo: "Galaxy S10", cor: "Preto"}
sA1.ligar(); // Samsung agora está ligado
console.log(sA1); // SmartphoneA {nome: "Samsung", ligado: true, modelo: "Galaxy S10", cor: "Preto"}

console.log('');

class TabletA extends DispositivoEletronicoA {
	constructor(nome, temWifi) {
		super(nome);

		this.temWifi = temWifi;
	}

	// Método substitui o método da Super Classe de Origem
	ligar() {
		console.log('Metodo alterado');
	}

	falaOi() {
		console.log(`${this.nome}: Oi!`);
	}
}

const tA1 = new TabletA('IPad', true);
console.log(tA1); // TabletA {nome: "IPad", ligado: false, temWifi: true}
tA1.ligar(); // Metodo alterado
tA1.falaOi(); // IPad: Oi!

// MÉTODO FALAOI, NÃO ADICIONA NA SUPER CLASSE DE ORIGEM
// sA1.falaOi(); // sA1.falaOi is not a function
