dataHora();

function dataHora() {
	const data = new Date();

	const dia = data.getDate();
	const mes = data.getMonth() + 1;
	const ano = data.getFullYear();

	const diaSemana = data.getDay();
	const horario = data.toLocaleTimeString();
	const dataNumeros = data.toLocaleDateString();
	const local = data.toString().slice(33);

	const texto = document.querySelector('#container');

	const h1 = criaH1();
	const h3 = criaH3();
	const p = criaP();

	h1.innerHTML =
		`${diaSemanaTexto()[diaSemana]}, ${zeroAEsquerda(dia)} ` +
		` de ${mesTexto()[mes]} de ${ano} às ${horario}`;
	h3.innerHTML = `${local}`;
	p.innerHTML = `${dataNumeros}`;

	texto.appendChild(p);
	texto.appendChild(h1);
	texto.appendChild(h3);
}

function diaSemanaTexto() {
	return (semanaTexto = {
		0: 'domingo',
		1: 'segunda-feira',
		2: 'terça-feira',
		3: 'quarta-feira',
		4: 'quinta-feira',
		5: 'sexta-feira',
		6: 'sábado',
	});
}

function mesTexto() {
	return (mesTexto = {
		0: 'janeiro',
		1: 'fevereiro',
		2: 'março',
		3: 'abril',
		4: 'maio',
		5: 'junho',
		6: 'julho',
		7: 'agosto',
		8: 'setembro',
		9: 'outubro',
		10: 'novembro',
		11: 'dezembro',
	});
}

function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function criaH1() {
	const h1 = document.createElement('h1');
	return h1;
}

function criaH3() {
	const h3 = document.createElement('h3');
	return h3;
}

function criaP() {
	const p = document.createElement('p');
	return p;
}
