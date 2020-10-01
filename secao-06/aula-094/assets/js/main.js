// Superclass = Super classe em OOP/POO
function Conta(agencia, conta, saldo) {
	this.agencia = agencia;
	this.conta = conta;
	this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
	if (valor > this.saldo) {
		console.log(`Saque no valor de R$ ${valor.toFixed(2)} não realizado`);
		console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
		return;
	}
	this.saldo -= valor;
	console.log(
		`Saque no valor de R$ ${valor.toFixed(2)} efetivado com sucesso!`
	);
	return console.log(`Novo saldo: R$${this.saldo.toFixed(2)}`);
};

Conta.prototype.depositar = function (valor) {
	this.saldo += valor;
	console.log(
		`Depósito no valor de R$ ${valor.toFixed(2)} efetivado com sucesso!`
	);
	return console.log(`Novo saldo: R$${this.saldo.toFixed(2)}`);
};

Conta.prototype.verSaldo = function () {
	return console.log(
		`Ag/C: ${this.agencia}/${this.conta} | ` +
			`Saldo: R$ ${this.saldo.toFixed(2)}`
	);
};
const conta1 = new Conta(11, 22, 10);
console.log(conta1); // Conta { agencia: 11, conta: 22, saldo: 10 }
conta1.verSaldo(); // Ag/C: 11/22 | Saldo: R$ 10.00

conta1.depositar(11);
/*
Depósito no valor de R$ 11.00 efetivado com sucesso!
Novo saldo: R$21.00
*/
conta1.depositar(10);
/*
Depósito no valor de R$ 10.00 efetivado com sucesso!
Novo saldo: R$31.00
*/
conta1.sacar(30);
/*
Saque no valor de R$ 30.00 efetivado com sucesso!
Novo saldo: R$1.00
*/
conta1.verSaldo(); // Ag/C: 11/22 | Saldo: R$ 1.00
conta1.sacar(10);
/*
Saque no valor de R$ 10.00 não realizado
Saldo insuficiente: R$ 1.00
*/
conta1.verSaldo(); // Ag/C: 11/22 | Saldo: R$ 1.00

console.log('');

function ContaCorrente(agencia, conta, saldo, limite) {
	Conta.call(this, agencia, conta, saldo);
	this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
	if (valor > this.saldo + this.limite) {
		console.log(`Saque no valor de R$ ${valor.toFixed(2)} não realizado`);
		console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
		return;
	}
	this.saldo -= valor;
	console.log(
		`Saque no valor de R$ ${valor.toFixed(2)} efetivado com sucesso!`
	);
	return console.log(`Novo saldo: R$${this.saldo.toFixed(2)}`);
};

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
console.log(contaCorrente1); // ContaCorrente { agencia: 11, conta: 22, saldo: 0, limite: 100 }
contaCorrente1.depositar(10);
/*
Depósito no valor de R$ 10.00 efetivado com sucesso!
Novo saldo: R$10.00
*/
contaCorrente1.sacar(110);
/*
Saque no valor de R$ 110.00 efetivado com sucesso!
Novo saldo: R$-100.00
*/
contaCorrente1.sacar(1);
/*
Saque no valor de R$ 1.00 não realizado
Saldo insuficiente: R$ -100.00
*/

console.log('');

function ContaPoupanca(agencia, conta, saldo) {
	Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca1 = new ContaPoupanca(12, 33, 0);
console.log(contaPoupanca1); // ContaPoupanca { agencia: 12, conta: 33, saldo: 0 }
contaPoupanca1.depositar(10);
/*
Depósito no valor de R$ 10.00 efetivado com sucesso!
Novo saldo: R$10.00
*/
contaPoupanca1.sacar(110);
/*
Saque no valor de R$ 110.00 não realizado
Saldo insuficiente: R$ 10.00
*/
contaPoupanca1.sacar(1);
/*
Saque no valor de R$ 1.00 efetivado com sucesso!
Novo saldo: R$9.00
*/
