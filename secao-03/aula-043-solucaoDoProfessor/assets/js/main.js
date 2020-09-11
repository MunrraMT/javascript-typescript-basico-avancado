const h1 = document.querySelector('.container h1');
const data = new Date();

// SOLUÇÃO COM SWITCH
// function getDiaSemanaTexto(diaSemana) {
// 	let diaSemanaTexto;
// 	switch (diaSemana) {
// 		case 0:
// 			diaSemanaTexto = 'Domingo';
// 			break;
// 		case 1:
// 			diaSemanaTexto = 'segunda-feira';
// 			break;
// 		case 2:
// 			diaSemanaTexto = 'terça-feira';
// 			break;
// 		case 3:
// 			diaSemanaTexto = 'quarta-feira';
// 			break;
// 		case 4:
// 			diaSemanaTexto = 'quinta-feira';
// 			break;
// 		case 5:
// 			diaSemanaTexto = 'sexta-feira';
// 			break;
// 		case 6:
// 			diaSemanaTexto = 'sábado';
// 			break;
// 		default:
// 			diaSemanaTexto = '';
// 			break;
// 	}
// 	return diaSemanaTexto;
// }

// function getNomeMes(numeroMes) {
// 	let nomeMes;
// 	switch (numeroMes) {
// 		case 0:
// 			nomeMes = 'janeiro';
// 			break;
// 		case 1:
// 			nomeMes = 'fevereiro';
// 			break;
// 		case 2:
// 			nomeMes = 'março';
// 			break;
// 		case 3:
// 			nomeMes = 'abril';
// 			break;
// 		case 4:
// 			nomeMes = 'maio';
// 			break;
// 		case 5:
// 			nomeMes = 'junho';
// 			break;
// 		case 6:
// 			nomeMes = 'julho';
// 			break;
// 		case 7:
// 			nomeMes = 'agosto';
// 			break;
// 		case 8:
// 			nomeMes = 'setembro';
// 			break;
// 		case 9:
// 			nomeMes = 'outubro';
// 			break;
// 		case 10:
// 			nomeMes = 'novembro';
// 			break;
// 		case 11:
// 			nomeMes = 'dezembro';
// 			break;
// 		default:
// 			nomeMes = '';
// 			break;
// 	}
// 	return nomeMes;
// }

// function zeroAEsquerda(num) {
// 	return num >= 10 ? num : `0${num}`;
// }

// function criaData() {
// 	const diaSemana = data.getDay();
// 	const numeroMes = data.getMonth();

// 	const nomedia = getDiaSemanaTexto(diaSemana);
// 	const nomeMes = getNomeMes(numeroMes);

// 	return (
// 		`${nomedia}, ${data.getDate()} de ${nomeMes}` +
// 		` de ${data.getFullYear()} ` +
// 		` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// 	);
// }

// h1.innerHTML = criaData(data);

// SOLUÇÃO COM ARRAYS
// function getDiaSemanaTexto(diaSemana) {
// 	const nomeSemana = [
// 		'domingo',
// 		'segunda-feira',
// 		'terça-feira',
// 		'quarta-feira',
// 		'quinta-feira',
// 		'sexta-feira',
// 		'sábado',
// 	];
// 	return nomeSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
// 	const meses = [
// 		'janeiro',
// 		'fevereiro',
// 		'março',
// 		'abril',
// 		'maio',
// 		'junho',
// 		'julho',
// 		'agosto',
// 		'setembro',
// 		'outubro',
// 		'novembro',
// 		'dezembro',
// 	];
// 	return meses[numeroMes];
// }

// function zeroAEsquerda(num) {
// 	return num >= 10 ? num : `0${num}`;
// }

// function criaData() {
// 	const diaSemana = data.getDay();
// 	const numeroMes = data.getMonth();

// 	const nomedia = getDiaSemanaTexto(diaSemana);
// 	const nomeMes = getNomeMes(numeroMes);

// 	return (
// 		`${nomedia}, ${data.getDate()} de ${nomeMes}` +
// 		` de ${data.getFullYear()} ` +
// 		` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// 	);
// }

// h1.innerHTML = criaData(data);

// MELHOR MANEIRA
h1.innerHTML = data.toLocaleDateString('pt-BR', {
	dateStyle: 'full',
	// timeStyle: 'long',
});
