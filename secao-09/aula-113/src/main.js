import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function (win, doc) {
	const gera = new GeraCPF();
	const section = doc.querySelector('section');
	const cpfGerado = doc.createElement('div');
	const btnHTML = doc.createElement('button');
	const pHTML = doc.createElement('p');

	btnHTML.innerText = 'Novo CPF';
	btnHTML.addEventListener('click', function (e) {
		e.preventDefault();
		const novoCPF = gera.geraNovoCpf();
		const cpfFormatado = gera.formatado(novoCPF);
		return (pHTML.innerText = cpfFormatado);
	});

	section.appendChild(cpfGerado);
	cpfGerado.appendChild(btnHTML);
	cpfGerado.appendChild(pHTML);

	cpfGerado.style.display = 'flex';
	cpfGerado.style.justifyContent = 'space-between';
	cpfGerado.style.alignItems = 'center';
	cpfGerado.style.height = '5rem';
	cpfGerado.style.fontSize = '3rem';
	cpfGerado.style.color = 'var(--primary-color)';
	cpfGerado.style.fontWeight = 'bold';
	cpfGerado.style.letterSpacing = '0.3rem';
	btnHTML.style.padding = '1rem';
	btnHTML.style.borderRadius = '10px';
	btnHTML.style.fontSize = '1.2rem';
	btnHTML.style.textTransform = 'uppercase';
	btnHTML.style.fontWeight = 'bold';
	btnHTML.style.cursor = 'pointer';
})(window, document);
