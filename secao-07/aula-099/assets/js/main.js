// Métodos de instância e estáticos

class ControleRemotoA {
	constructor(tv) {
		this.tv = tv;
		this.volume = 0;
	}
	// Método de Instância
	aumentarVolume(valor) {
		this.volume += valor;
	}

	// Método de Instância
	diminuirVolume(valor) {
		this.volume -= valor;
	}

	// Método Estático
	// É acessado só diretamente na função construtura
	// Todo método estático não tem acesso aos dados da instância
	static trocarTodasAsPilha() {
		console.log('trocou todas as pilhas');
	}
}

const controleA1 = new ControleRemotoA('LG');
controleA1.aumentarVolume(10);
console.log(controleA1); // ControleRemotoA {tv: "LG", volume: 10}
controleA1.diminuirVolume(7);
console.log(controleA1); // ControleRemotoA {tv: "LG", volume: 3}

// Método Estático
ControleRemotoA.trocarTodasAsPilha(); // trocou todas as pilhas

// Método de Instância
controleA1.aumentarVolume();

// EXECUTANDO UMA FUNÇÃO QUE FOI CRIADA FORA DA FUNÇÃO CONSTRUTORA
class ExecutandoFuncaoDeForaDaClasse {
	constructor() {
		fucaoDeTeste();
	}
}

function fucaoDeTeste() {
	console.log('Função de fora da Classe, executada com sucesso!');
}

const teste = new ExecutandoFuncaoDeForaDaClasse(); // Função de fora da Classe, executada com sucesso!
