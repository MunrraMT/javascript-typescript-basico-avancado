const numero = Number(prompt('Digite um número: '));
const raiz = Math.sqrt(numero);
const inteiro = Number.isInteger(numero);
const nan = isNaN(numero);
const arredondadoBaixo = Math.floor(numero);
const arredondadoCima = Math.ceil(numero);
const duasCasas = numero.toFixed(2);

const numeroTitulo = document.getElementById('numero-titulo');
const textoHtml = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

textoHtml.innerHTML = `<p>Raiz quadrada de ${numero} é <strong>${raiz}</strong></p>`;
textoHtml.innerHTML += `<p>${numero} é inteiro: <strong>${inteiro}</strong></p>`;
textoHtml.innerHTML += `<p>É NaN: <strong>${nan}</strong></p>`;
textoHtml.innerHTML += `<p>Arredondando para baixo: <strong>${arredondadoBaixo}</strong></p>`;
textoHtml.innerHTML += `<p>Arredondando para cima: <strong>${arredondadoCima}</strong></p>`;
textoHtml.innerHTML += `<p>Com duas casas decimais: <strong>${duasCasas}</strong></p>`;
