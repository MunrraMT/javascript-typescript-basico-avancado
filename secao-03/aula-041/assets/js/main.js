let data = new Date();
console.log(data.toString());

// MARCO ZERO DO TIMESTAMP UNIX
data = new Date(0);
console.log(data.toString());

// OBTER O DIA COM DATE
data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // MÊS COMEÇA DO ZERO
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - DOMINGO, 6 - SÁBADO

// FUNÇÃO QUE FORMATA DATA
function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = data.getFullYear();
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const seg = zeroAEsquerda(data.getSeconds());

	return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// FUNÇÃO QUE ADD ZERO A ESQUERDA
function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
