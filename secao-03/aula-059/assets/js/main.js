try {
	// É executada quando não há erros
} catch (error) {
	// É executada quando há erros
} finally {
	// sempre
}

try {
	console.log(a);
	console.log('Abrir um arquivo');
	console.log('Manupulei um arquivo e gerou erro');
	console.log('Fechei o arquivo');
} catch (error) {
	console.log('Tratando o erro');
} finally {
	console.log('finally: Eu sempre sou executado');
}

console.log('');

try {
	console.log('Abrir um arquivo');
	console.log('Manupulei um arquivo e gerou erro');
	console.log('Fechei o arquivo');

	try {
		console.log(b);
	} catch (error) {
		console.log('Deu erro');
	}
} catch (error) {
	console.log('Tratando o erro');
} finally {
	console.log('finally: Eu sempre sou executado');
}

console.log('');

function retornaHora(data) {
	if (!(data instanceof Date)) {
		console.log('Não é');
	} else {
		console.log('É');
	}
}
retornaHora(11);
retornaHora(new Date());

console.log('');

function retornaHora(data) {
	if (data && !(data instanceof Date)) {
		throw new TypeError('Esperando uma instância de Date');
	}
	if (!data) {
		data = new Date();
	}
	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
}
const data = new Date('08-29-1990 12:12:12');
console.log(data);
const hora = retornaHora(11);
console.log(hora);

console.log('');

function retornaHora(data) {
	if (data && !(data instanceof Date)) {
		throw new TypeError('Esperando uma instância de Date');
	}
	if (!data) {
		data = new Date();
	}
	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
}

try {
	const data = new Date('08-29-1990 12:12:12');
	console.log(data);
	const hora = retornaHora(11);
	console.log(hora);
} catch (error) {
	// tratar erro
} finally {
	console.log('Tenha um bom dia');
}
